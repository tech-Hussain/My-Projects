// Renderer process code

// Store extracted leads data
let extractedLeads = [];

// Path module via IPC (since we can't import Node.js modules directly in the renderer)
let path = {
  basename: function(filepath) {
    return filepath.split(/[\\/]/).pop();
  }
};

// DOM elements
const logPanel = document.getElementById('log-panel');
const extractionProgress = document.getElementById('extraction-progress');
const exportCsvBtn = document.getElementById('export-csv');
const exportExcelBtn = document.getElementById('export-excel');
const leadsTable = document.getElementById('leads-table');
const leadsTableBody = document.getElementById('leads-tbody');
const startExtractionBtn = document.getElementById('start-extraction');

// Store user settings
let userSettings = {
  rememberMe: false,
  email: '',
  lastUsedProfile: '',
  exportFormat: 'csv',
  autoStartScraping: false
};

// Store last filters
let lastFilters = {
  jobTitle: '',
  location: '',
  industry: '',
  limit: 50,
  skipApolloMissing: true
};

// Initialize tooltips and icons
document.addEventListener('DOMContentLoaded', async () => {
  // Initialize feather icons
  feather.replace();
  
  // Load saved settings
  await loadSettings();
  
  // Initialize settings form with loaded values
  initializeSettingsForm();
  
  // Set up event listeners
  setupEventListeners();
  
  // Set up IPC listeners
  setupIpcListeners();
  
  // Load all saved leads and render them
  try {
    const savedLeads = await window.electron.linkedinService.getAllLeads();
    if (Array.isArray(savedLeads) && savedLeads.length > 0) {
      extractedLeads = savedLeads;
      populateLeadsTable(extractedLeads);
      enableExportButtons(extractedLeads.length > 0);
      addLogMessage(`Loaded ${extractedLeads.length} saved leads.`);
    }
  } catch (e) {
    addLogMessage('No saved leads found or error loading leads.');
  }
  
  // Log initialization
  addLogMessage('Application initialized.');
  
  // For the login panel button
  const findChromeProfilesBtn = document.getElementById('find-chrome-profiles');
  if (findChromeProfilesBtn) {
    findChromeProfilesBtn.addEventListener('click', async () => {
      addLogMessage('DEBUG: Login panel button clicked!');
      try {
        findChromeProfilesBtn.disabled = true;
        addLogMessage('Scanning for Chrome profiles with Apollo extension...');
        const result = await window.electron.settingsService.findChromeProfiles();
        if (result.success && result.profiles && result.profiles.length > 0) {
          result.profiles.forEach((profile, i) => {
            addLogMessage(`Profile ${i+1}: ${profile.profileName} (${profile.profilePath})`);
          });
          addLogMessage(`Selected profile: ${result.selectedProfile.profileName} (${result.selectedProfile.profilePath})`);
        } else if (result.error) {
          addLogMessage(`Error: ${result.error}`);
        } else {
          addLogMessage('No Chrome profiles with Apollo extension found.');
        }
      } catch (error) {
        addLogMessage(`Error scanning for Chrome profiles: ${error.message}`);
      } finally {
        findChromeProfilesBtn.disabled = false;
      }
    });
  }

  // Only attach the event listener to the existing button
  const clearLeadsBtn = document.getElementById('clear-leads');
  if (clearLeadsBtn) {
    clearLeadsBtn.addEventListener('click', async () => {
      extractedLeads = [];
      clearLeadsTable();
      await window.electron.linkedinService.saveAllLeads([]);
      addLogMessage('All leads cleared.');
      enableExportButtons(false);
    });
  }
});

/**
 * Load saved settings from electron-store
 */
async function loadSettings() {
  try {
    const settings = await window.electron.settingsService.getSettings();
    
    if (settings.userSettings) {
      userSettings = settings.userSettings;
      
      // Apply loaded settings to UI
      const rememberMeCheckbox = document.getElementById('remember-me');
      const emailInput = document.getElementById('email');
      
      if (rememberMeCheckbox && emailInput && userSettings.rememberMe) {
        rememberMeCheckbox.checked = true;
        emailInput.value = userSettings.email || '';
      }
      
      // Apply export format preference
      if (userSettings.exportFormat === 'excel') {
        document.getElementById('export-excel').classList.add('btn-primary');
        document.getElementById('export-excel').classList.remove('btn-secondary');
        document.getElementById('export-csv').classList.add('btn-secondary');
        document.getElementById('export-csv').classList.remove('btn-primary');
      }
    }
    
    if (settings.lastFilters) {
      lastFilters = settings.lastFilters;
      
      // Populate filter inputs with saved values
      const jobTitleInput = document.getElementById('job-title');
      const locationInput = document.getElementById('location');
      const industryInput = document.getElementById('industry');
      const limitInput = document.getElementById('limit');
      const skipApolloMissingCheckbox = true;
      
      if (jobTitleInput) jobTitleInput.value = lastFilters.jobTitle || '';
      if (locationInput) locationInput.value = lastFilters.location || '';
      if (industryInput) industryInput.value = lastFilters.industry || '';
      if (limitInput) limitInput.value = lastFilters.limit || 50;
      }
    
  } catch (error) {
    console.error('Error loading settings:', error);
  }
}

/**
 * Initialize settings form with loaded values
 */
function initializeSettingsForm() {
  try {
    // Auto-start scraping checkbox
    const autoStartScrapingCheckbox = document.getElementById('auto-start-scraping');
    if (autoStartScrapingCheckbox) {
      autoStartScrapingCheckbox.checked = userSettings.autoStartScraping || false;
    }
    
    // Export format radio buttons
    const exportFormatCsv = document.getElementById('export-format-csv');
    const exportFormatExcel = document.getElementById('export-format-excel');
    
    if (exportFormatCsv && exportFormatExcel) {
      if (userSettings.exportFormat === 'excel') {
        exportFormatExcel.checked = true;
        exportFormatCsv.checked = false;
      } else {
        exportFormatCsv.checked = true;
        exportFormatExcel.checked = false;
      }
    }
    
    // Chrome profile info
    const profileInfoElement = document.getElementById('settings-chrome-profile-info');
    if (profileInfoElement && userSettings.lastUsedProfile) {
      const profileName = path.basename(userSettings.lastUsedProfile);
      profileInfoElement.textContent = `Using Chrome profile: ${profileName}`;
      profileInfoElement.classList.add('text-success');
      profileInfoElement.classList.remove('text-muted');
      
      // Also update the main UI if it exists
      const mainProfileInfoElement = document.getElementById('chrome-profile-info');
      if (mainProfileInfoElement) {
        mainProfileInfoElement.textContent = `Using Chrome profile: ${profileName}`;
        mainProfileInfoElement.classList.add('text-success');
        mainProfileInfoElement.classList.remove('text-muted');
      }
    }
  } catch (error) {
    console.error('Error initializing settings form:', error);
  }
}

// Set up event listeners for all form elements
function setupEventListeners() {
  // Credentials form submit
  document.getElementById('credentials-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('remember-me')?.checked || false;
    
    if (!email || !password) {
      addLogMessage('Error: Email and password are required');
      return;
    }
    
    addLogMessage('Attempting to login with credentials...');
    document.getElementById('login-button').disabled = true;
    
    try {
      const result = await window.electron.linkedinService.loginWithCredentials({
        email,
        password,
        rememberMe
      });
      
      if (result.success) {
        addLogMessage('Login successful!');
        
        // Update user settings
        userSettings.rememberMe = rememberMe;
        if (rememberMe) {
          userSettings.email = email;
        }
        
        // Save settings
        await window.electron.settingsService.saveSettings({ userSettings });
        
        // If auto-start scraping is enabled, start extraction
        if (userSettings.autoStartScraping) {
          startExtraction();
        }
      } else {
        addLogMessage(`Login failed: ${result.error}`);
      }
    } catch (error) {
      addLogMessage(`Error: ${error.message}`);
    } finally {
      document.getElementById('login-button').disabled = false;
    }
  });
  
  // Cookies login button
  document.getElementById('cookies-login-button').addEventListener('click', async () => {
    const cookiesJson = document.getElementById('cookies-json').value;
    
    if (!cookiesJson) {
      addLogMessage('Error: Cookies data is required');
      return;
    }
    
    addLogMessage('Attempting to login with cookies...');
    document.getElementById('cookies-login-button').disabled = true;
    
    try {
      const result = await window.electron.linkedinService.loginWithCookies(cookiesJson);
      
      if (result.success) {
        addLogMessage('Login with cookies successful!');
      } else {
        addLogMessage(`Login with cookies failed: ${result.error}`);
      }
    } catch (error) {
      addLogMessage(`Error: ${error.message}`);
    } finally {
      document.getElementById('cookies-login-button').disabled = false;
    }
  });
  
  // Import cookies from file
  document.getElementById('import-cookies-file').addEventListener('click', async () => {
    addLogMessage('Selecting cookie file...');
    
    try {
      const result = await window.electron.linkedinService.importCookiesFromFile();
      
      if (result.success) {
        addLogMessage('Cookies imported successfully!');
        document.getElementById('cookies-json').value = JSON.stringify(result.cookies, null, 2);
      } else {
        addLogMessage(`Failed to import cookies: ${result.error}`);
      }
    } catch (error) {
      addLogMessage(`Error: ${error.message}`);
    }
  });
  
  // Start extraction button
  document.getElementById('search-filters-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const jobTitle = document.getElementById('job-title').value;
    const location = document.getElementById('location').value;
    const industry = document.getElementById('industry').value;
    const limit = parseInt(document.getElementById('limit').value, 10);
    const skipApolloMissing = true;
    const startPage = parseInt(document.getElementById('start-page').value, 10) || 1;
    const endPage = parseInt(document.getElementById('end-page').value, 10) || 1;
    
    if (!jobTitle) {
      addLogMessage('Warning: Job title is empty. It\'s recommended to provide at least one search parameter.');
    }
    
    if (isNaN(limit) || limit < 1) {
      addLogMessage('Error: Please enter a valid number of leads to extract');
      return;
    }
    
    const filters = {
      jobTitle,
      location,
      industry,
      limit,
      skipApolloMissing,
      startPage,
      endPage
    };
    
    addLogMessage('Starting extraction process...');
    startExtractionBtn.disabled = true;
    updateProgress(0);
    
    try {
      const result = await window.electron.linkedinService.startExtraction(filters);
      
      if (result.success) {
        addLogMessage(`Extraction completed. Found ${result.count} leads.`);
        enableExportButtons(result.count > 0);
      } else {
        addLogMessage(`Extraction failed: ${result.error}`);
        enableExportButtons(false);
      }
    } catch (error) {
      addLogMessage(`Error: ${error.message}`);
      enableExportButtons(false);
    } finally {
      startExtractionBtn.disabled = false;
    }
  });
  
  // Export to CSV button
  exportCsvBtn.addEventListener('click', async () => {
    if (extractedLeads.length === 0) {
      addLogMessage('No leads to export');
      return;
    }
    
    addLogMessage('Exporting to CSV...');
    exportCsvBtn.disabled = true;
    
    try {
      const result = await window.electron.exportService.exportToCSV(extractedLeads);
      
      if (result.success) {
        addLogMessage(`Exported to CSV successfully: ${result.filePath}`);
      } else {
        addLogMessage(`Export to CSV failed: ${result.error}`);
      }
    } catch (error) {
      addLogMessage(`Error: ${error.message}`);
    } finally {
      exportCsvBtn.disabled = false;
    }
  });
  
  // Export to Excel button
  exportExcelBtn.addEventListener('click', async () => {
    if (extractedLeads.length === 0) {
      addLogMessage('No leads to export');
      return;
    }
    
    addLogMessage('Exporting to Excel...');
    exportExcelBtn.disabled = true;
    
    try {
      const result = await window.electron.exportService.exportToExcel(extractedLeads);
      
      if (result.success) {
        addLogMessage(`Exported to Excel successfully: ${result.filePath}`);
      } else {
        addLogMessage(`Export to Excel failed: ${result.error}`);
      }
    } catch (error) {
      addLogMessage(`Error: ${error.message}`);
    } finally {
      exportExcelBtn.disabled = false;
    }
  });
  
  // Settings modal event handlers
  const settingsForm = document.getElementById('settings-form');
  const saveSettingsBtn = document.getElementById('save-settings');
  
  if (saveSettingsBtn) {
    saveSettingsBtn.addEventListener('click', async () => {
      // Get settings from form
      const autoStartScraping = document.getElementById('auto-start-scraping').checked;
      const exportFormatCSV = document.getElementById('export-format-csv').checked;
      
      // Update settings object
      userSettings.autoStartScraping = autoStartScraping;
      userSettings.exportFormat = exportFormatCSV ? 'csv' : 'excel';
      
      // Save settings
      await window.electron.settingsService.saveSettings({ userSettings });
      
      // Update UI based on export format preference
      if (userSettings.exportFormat === 'excel') {
        exportExcelBtn.classList.add('btn-primary');
        exportExcelBtn.classList.remove('btn-secondary');
        exportCsvBtn.classList.add('btn-secondary');
        exportCsvBtn.classList.remove('btn-primary');
      } else {
        exportCsvBtn.classList.add('btn-primary');
        exportCsvBtn.classList.remove('btn-secondary');
        exportExcelBtn.classList.add('btn-secondary');
        exportExcelBtn.classList.remove('btn-primary');
      }
      
      addLogMessage('Settings saved successfully.');
      
      // Close the modal
      const settingsModal = bootstrap.Modal.getInstance(document.getElementById('settingsModal'));
      if (settingsModal) {
        settingsModal.hide();
      }
    });
  }
  
  // Handle Chrome profile scan from settings
  const settingsFindChromeProfilesBtn = document.getElementById('settings-find-chrome-profiles');
  if (settingsFindChromeProfilesBtn) {
    settingsFindChromeProfilesBtn.addEventListener('click', async () => {
      addLogMessage('DEBUG: Settings button clicked!');
      try {
        settingsFindChromeProfilesBtn.disabled = true;
        addLogMessage('Scanning for Chrome profiles with Apollo extension...');
        const result = await window.electron.settingsService.findChromeProfiles();
        if (result.success && result.profiles && result.profiles.length > 0) {
          result.profiles.forEach((profile, i) => {
            addLogMessage(`Profile ${i+1}: ${profile.profileName} (${profile.profilePath})`);
          });
          addLogMessage(`Selected profile: ${result.selectedProfile.profileName} (${result.selectedProfile.profilePath})`);
        } else if (result.error) {
          addLogMessage(`Error: ${result.error}`);
        } else {
          addLogMessage('No Chrome profiles with Apollo extension found.');
        }
      } catch (error) {
        addLogMessage(`Error scanning for Chrome profiles: ${error.message}`);
      } finally {
        settingsFindChromeProfilesBtn.disabled = false;
      }
    });
  }

  // Launch Chrome manually button
  const launchChromeManualBtn = document.getElementById('launch-chrome-manual');
  if (launchChromeManualBtn) {
    launchChromeManualBtn.addEventListener('click', async () => {
      try {
        launchChromeManualBtn.disabled = true;
        addLogMessage('Launching Chrome browser manually...');
        const result = await window.electron.util.launchChromeManual();
        if (result.success) {
          addLogMessage('Chrome browser launched successfully.');
        } else {
          addLogMessage(`Failed to launch Chrome: ${result.error}`);
        }
      } catch (error) {
        addLogMessage(`Error launching Chrome: ${error.message}`);
      } finally {
        launchChromeManualBtn.disabled = false;
      }
    });
  }
}

// Set up IPC listeners for communication with the main process
function setupIpcListeners() {
  // Update log with messages from main process
  window.electron.listener.onUpdateLog((message) => {
    addLogMessage(message);
  });
  
  // Update progress bar
  window.electron.listener.onUpdateProgress((progress) => {
    updateProgress(progress);
  });
  
  // Handle batch extracted leads (append, no duplicates)
  window.electron.listener.onLeadsExtracted((leads) => {
    // Use a Set of normalized URLs for deduplication
    const existingUrls = new Set(extractedLeads.map(l => normalizeProfileUrl(l.profileUrl)));
    let added = 0;
    leads.forEach(lead => {
      const normUrl = normalizeProfileUrl(lead.profileUrl);
      if (!existingUrls.has(normUrl)) {
        extractedLeads.push(lead);
        addLeadToTable(lead);
        existingUrls.add(normUrl);
        added++;
      }
    });
    enableExportButtons(extractedLeads.length > 0);
    window.electron.linkedinService.saveAllLeads(extractedLeads);
    addLogMessage(`Appended ${added} new leads from extraction.`);
  });
  
  // Incremental rendering: add each lead as it is extracted (append, no duplicates)
  window.electron.listener.onLeadExtracted((lead) => {
    if (!isDuplicateLead(lead)) {
      extractedLeads.push(lead);
      addLeadToTable(lead);
      enableExportButtons(extractedLeads.length > 0);
      window.electron.linkedinService.saveAllLeads(extractedLeads);
    }
  });
  
  // Clean up listeners on window unload
  window.addEventListener('beforeunload', () => {
    window.electron.listener.removeAllListeners();
  });
}

// Helper function to add log messages
function addLogMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('log-entry');
  
  const timestamp = new Date().toLocaleTimeString();
  messageElement.textContent = `[${timestamp}] ${message}`;
  
  logPanel.appendChild(messageElement);
  logPanel.scrollTop = logPanel.scrollHeight;
}

// Update progress bar
function updateProgress(percent) {
  extractionProgress.style.width = `${percent}%`;
  extractionProgress.textContent = `${percent}%`;
  extractionProgress.setAttribute('aria-valuenow', percent);
}

// Populate the leads table with extracted data
function populateLeadsTable(leads) {
  clearLeadsTable();
  
  leads.forEach(lead => {
    const row = document.createElement('tr');
    
    // Create cells for each data field
    const fields = [
      'fullName',
      'jobTitle', 
      'company',
      'location',
      'email',
      'phone',
      'profileUrl'
    ];
    
    fields.forEach(field => {
      const cell = document.createElement('td');
      
      // Make profile URL a clickable link
      if (field === 'profileUrl' && lead[field]) {
        const link = document.createElement('a');
        link.href = lead[field];
        link.textContent = 'View Profile';
        link.target = '_blank';
        cell.appendChild(link);
      } else {
        cell.textContent = lead[field] || 'N/A';
      }
      
      row.appendChild(cell);
    });
    
    leadsTableBody.appendChild(row);
  });
}

// Clear the leads table
function clearLeadsTable() {
  leadsTableBody.innerHTML = '';
}

// Enable or disable export buttons
function enableExportButtons(enable) {
  exportCsvBtn.disabled = !enable;
  exportExcelBtn.disabled = !enable;
}

// Add this function to add a single lead to the table
function addLeadToTable(lead) {
  const row = document.createElement('tr');
  const fields = [
    'fullName',
    'jobTitle',
    'company',
    'location',
    'email',
    'phone',
    'profileUrl'
  ];
  fields.forEach(field => {
    const cell = document.createElement('td');
    if (field === 'profileUrl' && lead[field]) {
      const link = document.createElement('a');
      link.href = lead[field];
      link.textContent = 'View Profile';
      link.target = '_blank';
      cell.appendChild(link);
    } else {
      cell.textContent = lead[field] || 'N/A';
    }
    row.appendChild(cell);
  });
  leadsTableBody.appendChild(row);
}

// Helper function to normalize LinkedIn profile URLs (strip query params, ensure trailing slash)
function normalizeProfileUrl(url) {
  try {
    let u = new URL(url);
    u.search = '';
    u.hash = '';
    // Extract the part after /in/ up to the next / or end
    const match = u.pathname.match(/^\/in\/([^/?#]+)/);
    if (match) {
      return u.origin + '/in/' + match[1];
    }
    return u.origin + u.pathname;
  } catch (e) {
    return url;
  }
}

function isDuplicateLead(newLead) {
  const normUrl = normalizeProfileUrl(newLead.profileUrl);
  return extractedLeads.some(lead => normalizeProfileUrl(lead.profileUrl) === normUrl);
}
