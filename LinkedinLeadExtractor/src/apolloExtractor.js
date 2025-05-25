/**
 * Extract data from Apollo extension in the DOM
 * @param {Page} page - Puppeteer page object
 * @returns {Promise<Object>} - Object containing email and phone from Apollo
 */
async function extractApolloData(page) {
  try {
    return await page.evaluate(() => {
      // Empty result object
      const result = {
        email: '',
        phone: ''
      };
      
      // Wait for Apollo sidebar to be present in the DOM
      const apolloContainer = document.querySelector('.apollo-sidebar, .apollo-extension, #apollo-sidebar');
      
      if (!apolloContainer) {
        return result; // Apollo extension not found or not active
      }
      
      // Look for email in different possible locations in Apollo's DOM
      const emailElements = [
        // Try different possible selectors that Apollo might use
        document.querySelector('.apollo-sidebar .email-value'),
        document.querySelector('.apollo-sidebar [data-test="email-value"]'),
        document.querySelector('.apollo-sidebar .contact-email'),
        document.querySelector('.apollo-sidebar span[title*="@"]'),
        document.querySelector('.apollo-extension .email-value'),
        document.querySelector('#apollo-sidebar .email-value')
      ];
      
      // Find the first element that exists
      const emailElement = emailElements.find(el => el !== null);
      
      if (emailElement) {
        result.email = emailElement.textContent.trim();
      }
      
      // Look for phone in different possible locations in Apollo's DOM
      const phoneElements = [
        // Try different possible selectors that Apollo might use
        document.querySelector('.apollo-sidebar .phone-value'),
        document.querySelector('.apollo-sidebar [data-test="phone-value"]'),
        document.querySelector('.apollo-sidebar .contact-phone'),
        document.querySelector('.apollo-sidebar span[title*="+"]'),
        document.querySelector('.apollo-extension .phone-value'),
        document.querySelector('#apollo-sidebar .phone-value')
      ];
      
      // Find the first element that exists
      const phoneElement = phoneElements.find(el => el !== null);
      
      if (phoneElement) {
        result.phone = phoneElement.textContent.trim();
      }
      
      return result;
    });
  } catch (error) {
    console.error('Error extracting Apollo data:', error);
    return { email: '', phone: '' };
  }
}

module.exports = {
  extractApolloData
};
