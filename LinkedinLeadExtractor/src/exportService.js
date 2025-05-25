const fs = require('fs');
const { promisify } = require('util');
const writeFileAsync = promisify(fs.writeFile);
const XLSX = require('xlsx');
const { stringify } = require('csv-stringify');

/**
 * Export extracted leads to CSV file
 * @param {Array} leads - Array of lead objects
 * @param {string} filePath - Path to save the CSV file
 * @returns {Promise<void>}
 */
async function exportToCSV(leads, filePath) {
  try {
    if (!leads || leads.length === 0) {
      throw new Error('No leads data to export');
    }
    
    // Define columns for CSV
    const columns = [
      { key: 'fullName', header: 'Full Name' },
      { key: 'jobTitle', header: 'Job Title' },
      { key: 'company', header: 'Company' },
      { key: 'location', header: 'Location' },
      { key: 'email', header: 'Email' },
      { key: 'phone', header: 'Phone' },
      { key: 'profileUrl', header: 'LinkedIn Profile URL' }
    ];
    
    // Generate CSV string using async API
    const csvData = await new Promise((resolve, reject) => {
      stringify(
        leads,
        {
      header: true,
      columns: columns
        },
        (err, output) => {
          if (err) return reject(err);
          resolve(output);
        }
      );
    });
    
    // Write to file
    await writeFileAsync(filePath, csvData, 'utf8');
    
    return true;
  } catch (error) {
    console.error('Error exporting to CSV:', error);
    throw error;
  }
}

/**
 * Export extracted leads to Excel file
 * @param {Array} leads - Array of lead objects
 * @param {string} filePath - Path to save the Excel file
 * @returns {Promise<void>}
 */
async function exportToExcel(leads, filePath) {
  try {
    if (!leads || leads.length === 0) {
      throw new Error('No leads data to export');
    }
    
    // Create a new workbook
    const workbook = XLSX.utils.book_new();
    
    // Convert leads to worksheet
    const worksheet = XLSX.utils.json_to_sheet(leads, {
      header: [
        'fullName',
        'jobTitle',
        'company',
        'location',
        'email',
        'phone',
        'profileUrl'
      ]
    });
    
    // Add custom headers
    XLSX.utils.sheet_add_aoa(worksheet, [
      ['Full Name', 'Job Title', 'Company', 'Location', 'Email', 'Phone', 'LinkedIn Profile URL']
    ], { origin: 'A1' });
    
    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, 'LinkedIn Leads');
    
    // Write to file
    XLSX.writeFile(workbook, filePath);
    
    return true;
  } catch (error) {
    console.error('Error exporting to Excel:', error);
    throw error;
  }
}

module.exports = {
  exportToCSV,
  exportToExcel
};
