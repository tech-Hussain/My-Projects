const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const fs = require('fs-extra');
const path = require('path');
const os = require('os');
const { generateSearchUrl, formatPhoneNumber, isValidEmail, sleep } = require('./src/utils');

// Add stealth plugin to avoid detection
puppeteer.use(StealthPlugin());

// Dedicated Puppeteer profile directory to avoid lock issues
function getPuppeteerProfileDir() {
  return path.join(os.homedir(), 'AppData', 'Local', 'Google', 'Chrome', 'PuppeteerProfile');
}

/**
 * Main function to find Chrome profiles with Apollo extension and extract LinkedIn data
 * @param {Object} options - Configuration options
 * @param {Function} logger - Function to log messages back to Electron
 * @param {Function} progressUpdater - Function to update progress percentage
 * @param {Function} dataCallback - Function to send extracted leads data back to Electron
 * @returns {Promise<Object>} - Result of operation
 */
async function main(options = {}, logger = console.log, progressUpdater = () => {}, dataCallback = () => {}) {
  try {
    logger('Starting Chrome profile detection and LinkedIn data extraction...');
    
    // 1. Find Chrome executable path
    const chromePath = options.chromePath || findChromeExecutable();
    logger(`Chrome executable found at: ${chromePath || 'Not found'}`);
    if (!chromePath) {
      logger('Chrome not found. Please make sure Google Chrome is installed.');
      return { success: false, error: 'Chrome not found' };
    }

    // 2. Use dedicated Puppeteer profile directory
    const puppeteerProfileDir = getPuppeteerProfileDir();
    logger(`Using Puppeteer profile directory: ${puppeteerProfileDir}`);
    if (!fs.existsSync(puppeteerProfileDir)) {
      logger('Puppeteer profile directory not found. Creating a new one...');
      await fs.ensureDir(puppeteerProfileDir);
      logger('Created new Puppeteer profile directory.');
    }

    // 3. Check for Apollo extension in Puppeteer profile
    const extensionsDir = path.join(puppeteerProfileDir, 'Default', 'Extensions');
    let hasExtensions = false;
    if (fs.existsSync(extensionsDir)) {
      const extensionIds = await fs.promises.readdir(extensionsDir);
      hasExtensions = extensionIds.length > 0;
    }
    if (!hasExtensions) {
      logger('No extensions found in Puppeteer profile. Continuing without Apollo extension. Only LinkedIn data will be extracted.');
    }

    // 4. Launch Chrome with Puppeteer profile and extract data
    return await launchChromeAndExtractData(
      chromePath, 
      puppeteerProfileDir,
      options, 
      logger, 
      progressUpdater, 
      dataCallback
    );
  } catch (error) {
    logger(`An error occurred: ${error.message}`);
    return { success: false, error: error.message };
  }
}

function findChromeExecutable() {
  const possibleChromePaths = [
    path.join(os.homedir(), 'AppData', 'Local', 'Google', 'Chrome', 'Application', 'chrome.exe'),
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
  ];
  for (const chromePath of possibleChromePaths) {
    if (fs.existsSync(chromePath)) return chromePath;
  }
  return null;
}

const NON_PROFILE_FOLDERS = new Set([
  'System Profile', 'Crashpad', 'Guest Profile', 'Default', 'Local State'
]);

/**
 * Launch Chrome with Puppeteer profile and extract LinkedIn data
 * @param {string} chromePath - Path to Chrome executable
 * @param {string} puppeteerProfileDir - Path to Puppeteer profile directory
 * @param {Object} options - Configuration options for the extraction
 * @param {Function} logger - Function to log messages
 * @param {Function} progressUpdater - Function to update progress percentage
 * @param {Function} dataCallback - Function to send extracted leads data
 * @returns {Promise<Object>} - Result of operation
 */
async function launchChromeAndExtractData(
  chromePath, 
  puppeteerProfileDir,
  options = {}, 
  logger = console.log, 
  progressUpdater = () => {}, 
  dataCallback = () => {}
) {
  let browser = null;
  const extractedLeads = [];
  try {
    logger('Launching Chrome with Puppeteer profile...');
    browser = await puppeteer.launch({
      headless: false,
      executablePath: chromePath,
      userDataDir: puppeteerProfileDir,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--disable-gpu'
      ],
      ignoreDefaultArgs: ['--disable-extensions']
    });

    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36');
    // page.setDefaultNavigationTimeout(60000); // 1 minutes for all navigation
    logger('Navigating to LinkedIn...');
    // Navigate to LinkedIn homepage and wait for network activity to settle
    // load means no more than 2 network connections for 500ms
    // timeout of 120000ms (2 minutes) is the maximum time to wait
    // The navigation will resolve as soon as load is reached, not waiting the full timeout
    await page.goto('https://www.linkedin.com', { waitUntil: 'load', timeout: 60000 });
    logger('Navigated to LinkedIn.');
    // Check if user is logged in or use provided cookies
    let isLoggedIn = false;
    
    // If cookies are provided, set them and refresh the page
    if (options.cookies && Array.isArray(options.cookies) && options.cookies.length > 0) {
      logger('Setting provided LinkedIn cookies...');
      await page.setCookie(...options.cookies);
      await page.reload({ waitUntil: 'load' });
    }
    
    // If loginOnly is true, always clear only LinkedIn cookies for a clean session
    if (options.loginOnly) {
      const client = await page.target().createCDPSession();
      const allCookies = await page.cookies();
      const linkedinCookies = allCookies.filter(c => c.domain && c.domain.includes('linkedin.com'));
      logger('LoginOnly flag set: Clearing only LinkedIn cookies for a clean session...');
      for (const cookie of linkedinCookies) {
        await client.send('Network.deleteCookies', {
          name: cookie.name,
          domain: cookie.domain,
          path: cookie.path || '/'
        });
      }
      await new Promise(res => setTimeout(res, 1000)); // Wait 1 second to ensure cookies are cleared
    }

    // Now check login status as usual
    isLoggedIn = await checkLoggedInStatus(page);

    // If loginOnly is true and credentials are provided, always perform a fresh login
    if (options.loginOnly && options.useCredentials && options.email && options.password) {
      logger('Proceeding to login with provided credentials...');
      await page.goto('https://www.linkedin.com/login', { waitUntil: 'load' });

      // If the "Sign in using another account" button is present, click it
      const otherAccountBtnSelector = '.signin-other-account, .artdeco-list__item.signin-other-account';
      const otherAccountBtn = await page.$(otherAccountBtnSelector);
      if (otherAccountBtn) {
        logger('Detected "Sign in using another account" button. Clicking it...');
        await otherAccountBtn.click();
        // Wait for the username input to appear
        await page.waitForSelector('#username', { timeout: 10000 });
      }

      // Now fill in the login form as before
      await page.evaluate((email, password) => {
        const emailInput = document.querySelector('#username');
        if (emailInput) {
          emailInput.value = email;
          emailInput.dispatchEvent(new Event('input', { bubbles: true }));
        }
        const passwordInput = document.querySelector('#password');
        if (passwordInput) {
          passwordInput.value = password;
          passwordInput.dispatchEvent(new Event('input', { bubbles: true }));
        }
      }, options.email, options.password);

      // Find the login button robustly
      const loginBtnSelector = '.btn__primary--large, button[type="submit"]';
      const loginBtn = await page.$(loginBtnSelector);
      if (!loginBtn) {
        throw new Error('Login button not found on LinkedIn login page.');
      }
      await Promise.all([
        page.waitForNavigation({ waitUntil: 'load' }),
        loginBtn.click()
      ]);
      isLoggedIn = await checkLoggedInStatus(page);
    } else if (!isLoggedIn && options.useCredentials && options.email && options.password) {
      logger('Attempting to login with provided credentials...');
      await page.goto('https://www.linkedin.com/login', { waitUntil: 'load' });
      await page.evaluate((email, password) => {
        const emailInput = document.querySelector('#username');
        if (emailInput) {
          emailInput.value = email;
          emailInput.dispatchEvent(new Event('input', { bubbles: true }));
        }
        const passwordInput = document.querySelector('#password');
        if (passwordInput) {
          passwordInput.value = password;
          passwordInput.dispatchEvent(new Event('input', { bubbles: true }));
        }
      }, options.email, options.password);
      // Find the login button robustly
      const loginBtnSelector = '.btn__primary--large, button[type="submit"]';
      const loginBtn = await page.$(loginBtnSelector);
      if (!loginBtn) {
        throw new Error('Login button not found on LinkedIn login page.');
      }
      await Promise.all([
        page.waitForNavigation({ waitUntil: 'load' }),
        loginBtn.click()
      ]);
      isLoggedIn = await checkLoggedInStatus(page);
    }
    
    // If still not logged in, wait for manual login
    if (!isLoggedIn) {
      logger('Not logged in to LinkedIn. Please log in manually in the browser window.');
      logger('Waiting for manual login...');
      
      // Wait for the user to log in (wait for feed page to load)
      await page.waitForSelector('.feed-identity-module', { timeout: 60000 })
        .catch(() => logger('Timeout waiting for login.'));
      
      // Check login status again
      isLoggedIn = await checkLoggedInStatus(page);
      if (!isLoggedIn) {
        logger('Still not logged in to LinkedIn after waiting.');
        return { success: false, error: 'LinkedIn login failed' };
      }
    }
    
    logger('Successfully logged in to LinkedIn.');
    
    // Get LinkedIn cookies for future sessions
    const linkedinCookies = await page.cookies();
    
    // If loginOnly flag is set, skip search/extraction and just return success and cookies
    if (options.loginOnly) {
      logger('Login only mode: skipping search and extraction.');
      return { success: true, cookies: linkedinCookies, profilePath: puppeteerProfileDir };
    }
    
    // TEMPORARY: Use hardcoded LinkedIn profile URLs for testing if enabled
    const USE_HARDCODED_LINKEDIN_URLS = false; // Set to false to restore original flow
    const HARDCODED_PROFILE_URLS = [
      //FOR TESTING

      // 'https://www.linkedin.com/in/hammad-khan-0b023b1a4/',
      // 'https://www.linkedin.com/in/hamza-ali-6aab0b293/',
      // 'https://www.linkedin.com/in/muhammad-sajid-06a74b18/',
      // 'https://www.linkedin.com/in/mohammadumairsaghir/',
    ];
    let profileUrls = [];
    if (USE_HARDCODED_LINKEDIN_URLS) {
      // logger('Using hardcoded LinkedIn profile URLs for extraction (TEMPORARY OVERRIDE).');
      profileUrls = HARDCODED_PROFILE_URLS;
    } else {
      // Generate search URL if filters are provided
      let searchUrl = 'https://www.linkedin.com/search/results/people/';
      let jobTitle = '', location = '', industry = '';
      if (options.filters) {
        jobTitle = options.filters.jobTitle;
        location = options.filters.location;
        industry = options.filters.industry;
        searchUrl = generateSearchUrl(jobTitle, location, industry);
        logger(`Generated search URL: ${searchUrl}`);
      }
      // Page range logic
      const startPage = options.filters?.startPage || 1;
      const endPage = options.filters?.endPage || 1;
      let allProfileUrls = [];
      for (let pageNum = startPage; pageNum <= endPage; pageNum++) {
        // LinkedIn paginates with the 'page' param (sometimes 'start' for offset)
        // We'll use 'page' param for now
        let pageUrl = searchUrl + (searchUrl.includes('?') ? '&' : '?') + `page=${pageNum}`;
        logger(`Navigating to LinkedIn search results page ${pageNum}...`);
        await page.goto(pageUrl, { waitUntil: 'load' });
        await new Promise(res => setTimeout(res, 3000));
        // Scroll to load all results
        await page.evaluate(async () => {
          for (let i = 0; i < 10; i++) {
            window.scrollBy(0, window.innerHeight);
            await new Promise(res => setTimeout(res, 500));
          }
        });
        // Extract profile URLs from this page
        const urlsOnPage = await page.evaluate(() => {
          const ul = document.querySelector('ul[role="list"]');
          if (!ul) return [];
          const anchors = Array.from(ul.querySelectorAll('li a[href^="https://www.linkedin.com/in/"]'));
          return Array.from(new Set(anchors.map(a => a.href)));
        });
        allProfileUrls = allProfileUrls.concat(urlsOnPage);
      }
      // Remove duplicates
      profileUrls = Array.from(new Set(allProfileUrls));
    }
    // Limit the number of profiles if needed
    const limit = typeof options.filters?.limit === 'number' && options.filters.limit > 0 ? options.filters.limit : 10;
    logger(`Limit: ${limit}`);
    // Filter out already extracted profile URLs if provided
    let skipProfileUrls = Array.isArray(options.skipProfileUrls) ? options.skipProfileUrls : [];
    // Normalize all skipProfileUrls
    const normalizedSkipUrls = skipProfileUrls.map(normalizeProfileUrl);
    let filteredProfileUrls = profileUrls.filter(url => !normalizedSkipUrls.includes(normalizeProfileUrl(url)));
    logger(`Filtered out ${profileUrls.length - filteredProfileUrls.length} already extracted profiles.`);
    const limitedProfileUrls = filteredProfileUrls.slice(0, limit);
    logger(`Found ${filteredProfileUrls.length} new profile URLs. Visiting up to ${limitedProfileUrls.length} profiles...`);

    for (let i = 0; i < limitedProfileUrls.length; i++) {
      const profileUrl = limitedProfileUrls[i];
      logger(`Visiting profile ${i + 1}/${limitedProfileUrls.length}: ${profileUrl}`);
      await page.goto(profileUrl, { waitUntil: 'load' });

      // Wait for the Apollo iframe to appear
      logger('Waiting for Apollo iframe...');
      let apolloFrame = null;
      let apolloIframeFound = false;
      try {
        await page.waitForSelector('#linkedin-sidebar-iframe', { timeout: 60000 });
        logger('Apollo iframe found.');
        const iframeElement = await page.$('#linkedin-sidebar-iframe');
        apolloFrame = await iframeElement.contentFrame();
        apolloIframeFound = true;
      } catch (e) {
        logger('Apollo iframe not found. Skipping Apollo extraction for this profile.');
      }

      let apolloData = null;
      let apolloSidebarLoaded = false;
      if (apolloIframeFound) {
        try {
          logger('Waiting for Apollo sidebar root inside iframe...');
          await apolloFrame.waitForSelector('.x_GRQmv', { timeout: 90000 });
          logger('Apollo sidebar root found.');
          apolloSidebarLoaded = true;
        } catch (e) {
          logger('Apollo sidebar root not found or failed to load in time. Skipping Apollo extraction for this profile.');
        }
      }

      if (apolloSidebarLoaded) {
        // Click 'Access email' and 'Access phone' buttons in Apollo sidebar before extracting
        await apolloFrame.evaluate(() => {
          // Click 'Access email' button if present
          const emailBtn = Array.from(document.querySelectorAll('button')).find(btn => btn.innerText && btn.innerText.trim().toLowerCase().includes('access email'));
          if (emailBtn) emailBtn.click();
          // Click 'Access phone' button if present
          const phoneBtn = Array.from(document.querySelectorAll('button')).find(btn => btn.innerText && btn.innerText.trim().toLowerCase().includes('access phone'));
          if (phoneBtn) phoneBtn.click();
        });

        // Wait dynamically until email or phone is revealed, up to 10 seconds
        const maxWaitMs = 10000;
        const pollInterval = 500;
        let waited = 0;
        let revealed = false;
        while (waited < maxWaitMs && !revealed) {
          revealed = await apolloFrame.evaluate(() => {
            const apolloRoot = document.querySelector('.x_GRQmv');
            if (!apolloRoot) return false;
            const emailDiv = Array.from(apolloRoot.querySelectorAll('.x_Adjd6 .x_ql9qN')).find(div => div.innerText && div.innerText.includes('@'));
            const phoneDiv = Array.from(apolloRoot.querySelectorAll('.x_Adjd6 .x_ql9qN')).find(div => /\+?\d[\d\s\-()]{7,}/.test(div.innerText));
            return !!(emailDiv || phoneDiv);
          });
          if (!revealed) {
            await new Promise(res => setTimeout(res, pollInterval));
            waited += pollInterval;
          }
        }
        // Now extract data from inside the iframe
        apolloData = await apolloFrame.evaluate(() => {
          const apolloRoot = document.querySelector('.x_GRQmv');
          if (!apolloRoot) return null;
          // Name
          const name = apolloRoot.querySelectorAll('.x_iXAY4 .x_pLJqF')[0]?.innerText?.trim() || 'N/A';
          // Job Title
          const jobTitle = apolloRoot.querySelectorAll('.x_iXAY4 .x__VwEF')[0]?.innerText?.trim() || 'N/A';
          // Experience (for company)
          const experienceText = apolloRoot.querySelectorAll('.x_iXAY4 .x_HWMrv')[0]?.innerText?.trim() || '';
          let company = 'N/A';
          const match = experienceText.toLowerCase().includes('at') ? 
            experienceText.match(/at (.+)$/i) :
            [null, experienceText];
          if (match && match[1]) company = match[1].trim();
          // Email (after clicking, should be in .x_ql9qN inside .x_Adjd6)
          let emails = [];
          const emailDivs = Array.from(apolloRoot.querySelectorAll('.x_Adjd6 .x_ql9qN')).filter(div => div.innerText && div.innerText.includes('@'));
          if (emailDivs.length > 0) {
            emails = emailDivs.map(div => div.innerText.trim());
          } else {
            const noEmailDiv = Array.from(apolloRoot.querySelectorAll('.x_Adjd6')).find(div => div.innerText && div.innerText.toLowerCase().includes('no email found'));
            if (noEmailDiv) emails = ['No email found'];
          }
          // Phone (after clicking, should be in .x_Adjd6 .x_ql9qN and look like a phone number)
          let phones = [];
          const phoneDivs = Array.from(apolloRoot.querySelectorAll('.x_Adjd6 .x_ql9qN')).filter(div => /\+?\d[\d\s\-()]{7,}/.test(div.innerText));
          if (phoneDivs.length > 0) {
            phones = phoneDivs.map(div => div.innerText.trim());
          } else {
            const noPhoneDiv = Array.from(apolloRoot.querySelectorAll('.x_Adjd6')).find(div => div.innerText && div.innerText.toLowerCase().includes('no phone found'));
            if (noPhoneDiv) phones = ['No phone found'];
          }
          // LinkedIn Profile URL
          const linkedinUrl = apolloRoot.querySelector('a[href*="linkedin.com/in/"]')?.href || 'N/A';
          return { name, jobTitle, company, emails, phones, linkedinUrl };
        });
      }

      // Extract location from LinkedIn DOM (main page, not iframe)
      const location = await page.evaluate(() => {
        // Try robust selectors for location
        let loc = document.querySelector('.text-body-small.inline.t-black--light.break-words')?.innerText?.trim();
        if (!loc) {
          const locSpan = Array.from(document.querySelectorAll('span.text-body-small')).find(e => e.innerText.match(/Pakistan|India|USA|UK|Canada|[A-Za-z]+, [A-Za-z]+/));
          if (locSpan) loc = locSpan.innerText.trim();
        }
        return loc || 'N/A';
      });

      // Merge location into Apollo data
      if (apolloData) {
        apolloData.location = location;
      }

      let result;
      if (apolloData && apolloData.name) {
        const cleanName = apolloData.name.replace(/[.]+$/, '').trim();
        logger(`Extracted from Apollo DOM: ${cleanName || 'N/A'}`);
        // Convert emails/phones arrays to comma-separated strings for display
        result = { source: 'apollo', ...apolloData, email: (apolloData.emails || []).join(', '), phone: (apolloData.phones || []).join(', '), fullName: cleanName, profileUrl: normalizeProfileUrl(page.url()), location };
      } else {
        // Fallback: use extractProfileData(page) and map 'name' to 'fullName'
        const profileData = await extractProfileData(page);
        const cleanName = profileData.name ? profileData.name.replace(/[.]+$/, '').trim() : '';
        logger(`Extracted from LinkedIn DOM: ${cleanName || 'N/A'}`);
        result = { source: 'linkedin', ...profileData, fullName: cleanName, profileUrl: normalizeProfileUrl(page.url()) };
        delete result.name;
      }

      extractedLeads.push(result);
      if (typeof dataCallback === 'function') dataCallback(result);
      if (typeof progressUpdater === 'function') progressUpdater(Math.round(((i + 1) / limitedProfileUrls.length) * 100));
    }

    logger(`Extraction completed. ${extractedLeads.length} leads found.`);
    return { 
      success: true, 
      leads: extractedLeads,
      cookies: linkedinCookies,
      profilePath: puppeteerProfileDir
    };
    
  } catch (error) {
    logger(`Error during Chrome launch or data extraction: ${error.message}`);
    return { success: false, error: error.message };
  } finally {
    // Optionally close browser or leave open for manual review
  }
}

/**
 * Check if the user is logged in to LinkedIn
 * @param {Page} page - Puppeteer page object
 * @returns {Promise<boolean>} - True if logged in
 */
async function checkLoggedInStatus(page) {
  try {
    // Check for login status by looking for elements only visible when logged in
    return await page.evaluate(() => {
      const feedIdentity = document.querySelector('.feed-identity-module');
      const navBar = document.querySelector('.global-nav');
      const loginForm = document.querySelector('.login-form');
      
      // Return true if elements that indicate logged in state are present
      return (feedIdentity !== null || navBar !== null) && loginForm === null;
    });
  } catch (error) {
    console.error('Error checking login status:', error);
    return false;
  }
}

/**
 * Extract profile data from LinkedIn and Apollo extension
 * @param {Page} page - Puppeteer page object
 * @returns {Promise<Object>} - Extracted profile data
 */
async function extractProfileData(page) {
  try {
    // Extract basic profile data from LinkedIn (robust selectors)
    const basicData = await page.evaluate(() => {
      // Name extraction using regex for class
      let name = '';
      // Try multiple selectors for full name
      name = document.querySelector('h1')?.innerText?.trim() ||
             document.querySelector('.text-heading-xlarge')?.innerText?.trim() ||
             document.querySelector('.top-card-layout__title')?.innerText?.trim() ||
             '';
      // Job Title and Company extraction from experience section
      let jobTitle = '';
      let company = '';
      // Find the experience section list
      const expList = document.querySelectorAll('ul.SAuJwrRzbUFIETLBBzXdDZhbauFQoaHcoTwk');
      let foundPresent = false;
      if (expList && expList.length > 0) {
        // Loop through all experience list items
        for (const ul of expList) {
          const items = ul.querySelectorAll('li');
          for (const li of items) {
            // Check if this experience is 'Present'
            const presentSpan = li.querySelector('span[aria-hidden="true"]');
            if (presentSpan && /present/i.test(presentSpan.innerText)) {
              // Get job title
              const jt = li.querySelector('div.t-bold span[aria-hidden="true"]');
              if (jt) jobTitle = jt.innerText.trim();
              // Get company
              const comp = li.querySelector('span.t-14 span[aria-hidden="true"]');
              if (comp) company = comp.innerText.split('·')[0].trim();
              foundPresent = true;
              break;
            }
          }
          if (foundPresent) break;
        }
        // If no 'Present', use the first (most recent) experience
        if (!foundPresent) {
          const firstLi = expList[0].querySelector('li');
          if (firstLi) {
            const jt = firstLi.querySelector('div.t-bold span[aria-hidden="true"]');
            if (jt) jobTitle = jt.innerText.trim();
            const comp = firstLi.querySelector('span.t-14 span[aria-hidden="true"]');
            if (comp) company = comp.innerText.split('·')[0].trim();
          }
        }
      }
      if (!jobTitle && !company) {
        jobTitle = 'No job title, no experience';
        company = 'No job title, no experience';
      }
      // Location
      let location = document.querySelector('.text-body-small.inline.t-black--light.break-words')?.innerText.trim();
      if (!location) {
        const locSpan = Array.from(document.querySelectorAll('span.text-body-small')).find(e => e.innerText.match(/Pakistan|India|USA|UK|Canada|[A-Za-z]+, [A-Za-z]+/));
        if (locSpan) location = locSpan.innerText.trim();
      }
      // About/Bio
      let about = document.querySelector('section#about span[aria-hidden="true"]')?.innerText.trim() || '';
      if (!about) {
        about = Array.from(document.querySelectorAll('section#about span')).find(s => s.getAttribute('aria-hidden') === 'true')?.innerText.trim() || '';
      }
      const profileUrl = window.location.href;
      // Return all fields
      return { name, jobTitle, company, location, about, profileUrl };
    });
    // Extract Apollo data from overlay (robust selectors)
    const apolloData = await page.evaluate(() => {
      const overlay = document.querySelector('#LinkedinOverlay');
      let email = '';
      let phone = '';
      if (overlay) {
        // Email: look for span with @
        const emailSpan = Array.from(overlay.querySelectorAll('span')).find(s => s.innerText && s.innerText.includes('@'));
        if (emailSpan) email = emailSpan.innerText.trim();
        // Phone: look for span with +
        const phoneSpan = Array.from(overlay.querySelectorAll('span')).find(s => /\+\d{1,3}/.test(s.innerText));
        if (phoneSpan) phone = phoneSpan.innerText.trim();
      }
      return { email, phone };
    });
    return { ...basicData, ...apolloData };
  } catch (error) {
    console.error('Error extracting profile data:', error);
    return {
      name: 'Error',
      jobTitle: 'Error',
      company: 'Error',
      location: 'Error',
      about: 'Error',
      profileUrl: 'Error',
      email: 'Error',
      phone: 'Error'
    };
  }
}

/**
 * Generate a unique ID for each extraction job
 * @returns {string} - Unique ID
 */
function generateJobId() {
  return `job_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
}

function findApolloExtensionPath(extensionsDir, logger) {
  if (!fs.existsSync(extensionsDir)) return null;
  const extensionIds = fs.readdirSync(extensionsDir);
  for (const extId of extensionIds) {
    const extPath = path.join(extensionsDir, extId);
    if (fs.statSync(extPath).isDirectory()) {
      const versions = fs.readdirSync(extPath)
        .filter(v => fs.statSync(path.join(extPath, v)).isDirectory())
        .sort((a, b) => b.localeCompare(a, undefined, { numeric: true })); // latest first
      for (const version of versions) {
        const versionPath = path.join(extPath, version);
        const manifestPath = path.join(versionPath, 'manifest.json');
        if (fs.existsSync(manifestPath)) {
          try {
            const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
            if (
              manifest.name &&
              manifest.name.toLowerCase().includes('apollo') &&
              manifest.manifest_version
            ) {
              logger(`Found Apollo extension candidate: ${manifest.name} at ${versionPath}`);
              return versionPath;
            }
          } catch (e) {
            logger(`Skipping extension at ${versionPath} due to manifest parse error.`);
            continue;
          }
        }
      }
    }
  }
  return null;
}

// Helper to normalize LinkedIn profile URLs (strip query params, ensure trailing slash)
function normalizeProfileUrl(url) {
  try {
    let u = new URL(url);
    // Remove query and hash
    u.search = '';
    u.hash = '';
    // Ensure trailing slash after /in/username
    if (!u.pathname.endsWith('/')) u.pathname += '/';
    // Only keep up to /in/username/
    const match = u.pathname.match(/^\/in\/[^/]+\//);
    if (match) u.pathname = match[0];
    return u.origin + u.pathname;
  } catch (e) {
    return url;
  }
}

// If this file is run directly (not required as a module)
if (require.main === module) {
  // Run the main function to start the process
  main().catch(console.error);
  
  // Handle Replit environment check
  function isRunningOnReplit() {
    return process.env.REPL_ID !== undefined;
  }
  
  // If running on Replit, provide informative message
  if (isRunningOnReplit()) {
    console.log('This script is designed to run on a local Windows environment with Chrome installed.');
    console.log('On Replit, the script can\'t access your local Chrome installation.');
    console.log('Please download this script and run it on your local machine to use it properly.');
  }
}

// Export functions for use in Electron
module.exports = {
  findChromeExecutable,
  launchChromeAndExtractData,
  extractProfileData,
  checkLoggedInStatus,
  generateSearchUrl,
  formatPhoneNumber,
  isValidEmail,
  main,
  generateJobId
};