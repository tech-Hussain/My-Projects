const { sleep, generateSearchUrl } = require('./utils');
const { extractApolloData } = require('./apolloExtractor');

/**
 * Login to LinkedIn with provided credentials
 * @param {Page} page - Puppeteer page object
 * @param {string} email - LinkedIn email
 * @param {string} password - LinkedIn password
 * @returns {Promise<Array>} - Array of cookies if login successful
 */
async function linkedinLogin(page, email, password) {
  try {
    // Go to LinkedIn login page
    await page.goto('https://www.linkedin.com/login', { waitUntil: 'networkidle2' });

    // Fill in the login form
    await page.type('#username', email);
    await page.type('#password', password);
    
    // Click the login button
    await Promise.all([
      page.waitForNavigation({ waitUntil: 'networkidle2' }),
      page.click('.btn__primary--large')
    ]);
    
    // Check if login was successful
    const isLoggedIn = await page.evaluate(() => {
      // LinkedIn redirects to feed page after successful login
      return window.location.href.includes('/feed/') || 
             document.querySelector('.feed-identity-module') !== null;
    });
    
    if (!isLoggedIn) {
      // Check for security verification
      const hasChallenge = await page.evaluate(() => {
        return document.querySelector('.checkpoint-challenge') !== null;
      });
      
      if (hasChallenge) {
        throw new Error('Security verification required. Please complete it manually in the browser window.');
      }
      
      throw new Error('Login failed. Check your credentials.');
    }
    
    // Get cookies after successful login
    const cookies = await page.cookies();
    return cookies;
  } catch (error) {
    throw new Error(`LinkedIn login failed: ${error.message}`);
  }
}

/**
 * Extract leads from LinkedIn based on search filters
 * @param {Page} page - Puppeteer page object
 * @param {object} filters - Search filters
 * @param {function} logger - Function to log messages
 * @param {function} progressUpdater - Function to update progress
 * @returns {Promise<Array>} - Array of extracted leads
 */
async function extractLeads(page, filters, logger, progressUpdater) {
  const leads = [];
  const { jobTitle, location, industry, limit, skipApolloMissing } = filters;
  
  try {
    // Generate and go to search URL
    const searchUrl = generateSearchUrl(jobTitle, location, industry);
    logger(`Navigating to search URL: ${searchUrl}`);
    
    await page.goto(searchUrl, { waitUntil: 'networkidle2' });
    await sleep(2000);
    
    // Check if we need to sign in
    const needsLogin = await page.evaluate(() => {
      return document.querySelector('.main__sign-in-container') !== null;
    });
    
    if (needsLogin) {
      throw new Error('Not logged in. Please login first.');
    }
    
    // Wait for search results to load
    await page.waitForSelector('.search-results-container', { timeout: 10000 })
      .catch(() => {
        throw new Error('Could not find search results. Check your filters or LinkedIn login status.');
      });
    
    // Get all search result links
    logger('Collecting profile links from search results...');
    
    let profileLinks = [];
    let currentPage = 1;
    let hasNextPage = true;
    
    // Collect profile links from multiple pages as needed
    while (hasNextPage && profileLinks.length < limit) {
      logger(`Collecting links from search results page ${currentPage}...`);
      
      // Extract all profile links on current page
      const newLinks = await page.evaluate(() => {
        const links = [];
        const resultItems = document.querySelectorAll('.reusable-search__result-container');
        
        resultItems.forEach(item => {
          const linkElement = item.querySelector('.app-aware-link[href*="/in/"]');
          if (linkElement) {
            links.push(linkElement.href);
          }
        });
        
        return links;
      });
      
      profileLinks = [...profileLinks, ...newLinks];
      logger(`Found ${newLinks.length} profiles on page ${currentPage}. Total: ${profileLinks.length}`);
      
      // Check if we have enough links
      if (profileLinks.length >= limit) {
        profileLinks = profileLinks.slice(0, limit);
        break;
      }
      
      // Navigate to next page if available
      hasNextPage = await page.evaluate(() => {
        const nextButton = document.querySelector('.artdeco-pagination__button--next:not(.artdeco-pagination__button--disabled)');
        return !!nextButton;
      });
      
      if (hasNextPage) {
        logger(`Navigating to search results page ${currentPage + 1}...`);
        await Promise.all([
          page.waitForNavigation({ waitUntil: 'networkidle2' }),
          page.click('.artdeco-pagination__button--next')
        ]);
        currentPage++;
        await sleep(2000);
      }
    }
    
    logger(`Found a total of ${profileLinks.length} profiles to process.`);
    
    // Visit each profile and extract data
    for (let i = 0; i < profileLinks.length; i++) {
      const profileUrl = profileLinks[i];
      const progress = Math.round((i / profileLinks.length) * 100);
      
      progressUpdater(progress);
      logger(`Processing profile ${i + 1}/${profileLinks.length}: ${profileUrl}`);
      
      try {
        // Navigate to profile
        await page.goto(profileUrl, { waitUntil: 'networkidle2' });
        await sleep(2000);
        
        // Wait for profile to load
        await page.waitForSelector('.pv-top-card', { timeout: 10000 })
          .catch(() => {
            logger(`Could not load profile: ${profileUrl}`);
            return; // Skip this profile
          });
        
        // Extract basic profile data
        const profileData = await page.evaluate(() => {
          const nameElement = document.querySelector('.pv-top-card .text-heading-xlarge');
          const titleElement = document.querySelector('.pv-top-card .text-body-medium');
          const locationElement = document.querySelector('.pv-top-card .text-body-small:not(.inline)');
          
          const companyElement = document.querySelector('.pv-top-card .inline-show-more-text');
          
          return {
            fullName: nameElement ? nameElement.textContent.trim() : '',
            jobTitle: titleElement ? titleElement.textContent.trim() : '',
            location: locationElement ? locationElement.textContent.trim() : '',
            company: companyElement ? companyElement.textContent.trim() : '',
          };
        });
        
        // Wait for Apollo extension to load data
        await sleep(3000);
        
        // Extract Apollo data
        const apolloData = await extractApolloData(page);
        
        // Skip if required and no Apollo data is found
        if (skipApolloMissing && (!apolloData.email && !apolloData.phone)) {
          logger(`Skipping profile with no Apollo data: ${profileUrl}`);
          continue;
        }
        
        // Combine the data
        const leadData = {
          ...profileData,
          ...apolloData,
          profileUrl
        };
        
        leads.push(leadData);
        logger(`Successfully extracted data for: ${profileData.fullName}`);
      } catch (error) {
        logger(`Error processing profile ${profileUrl}: ${error.message}`);
      }
      
      // Random delay between requests
      const delay = Math.floor(Math.random() * 2000) + 2000;
      await sleep(delay);
    }
    
    // Update progress to 100% when done
    progressUpdater(100);
    logger(`Lead extraction completed. Extracted ${leads.length} leads.`);
    
    return leads;
  } catch (error) {
    logger(`Lead extraction failed: ${error.message}`);
    throw error;
  }
}

module.exports = {
  linkedinLogin,
  extractLeads
};
