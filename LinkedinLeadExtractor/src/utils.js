/**
 * Sleep/wait function
 * @param {number} ms - Milliseconds to sleep
 * @returns {Promise<void>}
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Generate LinkedIn search URL based on filters
 * @param {string} jobTitle - Job title to search for
 * @param {string} location - Location to search in
 * @param {string} industry - Industry to filter by
 * @returns {string} - LinkedIn search URL
 */
function generateSearchUrl(jobTitle, location, industry) {
  let keywords = [];
  if (jobTitle) keywords.push(jobTitle);
  if (location) keywords.push(location);
  if (industry) keywords.push(industry);
  const query = encodeURIComponent(keywords.join(' '));
  return `https://www.linkedin.com/search/results/people/?keywords=${query}`;
}

/**
 * Format a phone number for consistency
 * @param {string} phone - Phone number to format
 * @returns {string} - Formatted phone number
 */
function formatPhoneNumber(phone) {
  if (!phone) return '';
  
  // Remove all non-digit characters
  let digits = phone.replace(/\D/g, '');
  
  // If it starts with a country code (assumed to be 1 for simplicity)
  if (digits.length > 10 && digits.startsWith('1')) {
    digits = `+${digits}`;
  } else if (digits.length === 10) {
    // Format as (XXX) XXX-XXXX for US numbers
    digits = `(${digits.substring(0, 3)}) ${digits.substring(3, 6)}-${digits.substring(6)}`;
  }
  
  return digits;
}

/**
 * Check if a string is a valid email address
 * @param {string} email - Email to validate
 * @returns {boolean} - True if email is valid
 */
function isValidEmail(email) {
  if (!email) return false;
  
  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

module.exports = {
  sleep,
  generateSearchUrl,
  formatPhoneNumber,
  isValidEmail
};
