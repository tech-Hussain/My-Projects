const { app, BrowserWindow, ipcMain, dialog, Menu, Tray, nativeImage } = require('electron');
const path = require('path');
const fs = require('fs-extra');
const os = require('os');
const puppeteer = require('puppeteer');
const Store = require('electron-store').default;
const { fork, exec, spawn } = require('child_process');
const store = new Store();
const { exportToCSV, exportToExcel } = require('./src/exportService');
const chromeApolloFinder = require('./chrome-apollo-finder');
const { stringify } = require('csv-stringify');

// BEGIN: Puppeteer profile directory check for first-time users
function getPuppeteerProfileDir() {
  return path.join(os.homedir(), 'AppData', 'Local', 'Google', 'Chrome', 'PuppeteerProfile');
}

const chromePath = chromeApolloFinder.findChromeExecutable();
const puppeteerProfileDir = getPuppeteerProfileDir();
if (!fs.existsSync(puppeteerProfileDir)) {
  fs.ensureDirSync(puppeteerProfileDir);
  if (chromePath) {
    console.log('Attempting to launch Chrome at:', chromePath);
    spawn(chromePath, ['--user-data-dir=' + puppeteerProfileDir], { detached: true, stdio: 'ignore' }).unref();
    console.log('Chrome launched for manual profile setup. Please log in, install extensions, then close Chrome and restart this app.');
  } else {
    console.log('Chrome not found. Please make sure Google Chrome is installed.');
  }
  setTimeout(() => process.exit(0), 1000); // Wait 1 second before exiting
}
// END: Puppeteer profile directory check

// Keep a global reference of the window object
let mainWindow;
let tray = null;
let extractionInProgress = false;
let extractedLeads = [];

// Define schema for Electron Store
const schema = {
  userSettings: {
    type: 'object',
    properties: {
      rememberMe: { type: 'boolean' },
      email: { type: 'string' },
      lastUsedProfile: { type: 'string' },
      exportFormat: { type: 'string', enum: ['csv', 'excel'] },
      autoStartScraping: { type: 'boolean' }
    }
  },
  lastFilters: {
    type: 'object',
    properties: {
      jobTitle: { type: 'string' },
      location: { type: 'string' },
      industry: { type: 'string' },
      limit: { type: 'number' },
      skipApolloMissing: { type: 'boolean' }
    }
  },
  linkedinCookies: {
    type: 'array'
  }
};

// Add at the top, after other requires
const PROFILE_COPY_DIR = path.join(__dirname, 'chrome-profile-copies');
const AUTOMATION_PROFILE_DIR = path.join(PROFILE_COPY_DIR, 'AutomationProfile');

// Persistent storage for all extracted leads
const ALL_LEADS_KEY = 'allExtractedLeads';

function createWindow() {
  // Create the browser window
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, 'preload.js')
    },
    icon: path.join(__dirname, 'assets/logo.svg')
  });

  // Load the index.html file
  mainWindow.loadFile('index.html');

  // Open DevTools in development mode
  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();
  }
  
  // Initialize the store with defaults if needed
  initializeStore();
  
  // Create system tray
  createTray();

  // Emitted when the window is closed
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
  
  // Handle close event (minimize to tray instead of closing)
  mainWindow.on('close', (event) => {
    if (!app.isQuitting) {
      event.preventDefault();
      mainWindow.hide();
      return false;
    }
    return true;
  });
}

/**
 * Create system tray icon and menu
 */
function createTray() {
  // Create tray icon
  const iconPath = path.join(__dirname, 'assets/logo.png');
  if (!fs.existsSync(iconPath)) {
    console.warn('Tray icon not found, using default Electron icon.');
    tray = new Tray(null);
  } else {
    tray = new Tray(iconPath);
  }
  
  // Set tooltip
  tray.setToolTip('LinkedIn Lead Extractor');
  
  // Prepare status icons for context menu
  let statusActiveIcon, statusIdleIcon;
  const statusActivePath = path.join(__dirname, 'assets/status-active.png');
  const statusIdlePath = path.join(__dirname, 'assets/status-idle.png');
  if (fs.existsSync(statusActivePath)) {
    statusActiveIcon = nativeImage.createFromPath(statusActivePath);
  }
  if (fs.existsSync(statusIdlePath)) {
    statusIdleIcon = nativeImage.createFromPath(statusIdlePath);
  }

  // Create context menu
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Status',
      enabled: false,
      icon: extractionInProgress ? statusActiveIcon : statusIdleIcon,
      sublabel: extractionInProgress ? 'Extraction in progress' : 'Idle'
    },
    { type: 'separator' },
    {
      label: 'Show Application',
      click: () => {
        mainWindow.show();
      }
    },
    {
      label: 'Start Extraction',
      click: () => {
        mainWindow.show();
        mainWindow.webContents.send('tray-action', 'start-extraction');
      },
      enabled: !extractionInProgress
    },
    {
      label: 'Export Leads',
      submenu: [
        {
          label: 'CSV',
          click: () => {
            mainWindow.show();
            mainWindow.webContents.send('tray-action', 'export-csv');
          },
          enabled: extractedLeads.length > 0
        },
        {
          label: 'Excel',
          click: () => {
            mainWindow.show();
            mainWindow.webContents.send('tray-action', 'export-excel');
          },
          enabled: extractedLeads.length > 0
        }
      ]
    },
    { type: 'separator' },
    {
      label: 'Quit',
      click: () => {
        app.isQuitting = true;
        app.quit();
      }
    }
  ]);
  
  // Set context menu
  tray.setContextMenu(contextMenu);
  
  // Show window on tray icon click
  tray.on('click', () => {
    mainWindow.show();
  });
}

// Create window when Electron is ready
app.whenReady().then(createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

/**
 * Initialize the electron-store with default values if needed
 */
function initializeStore() {
  // Setup default settings if they don't exist
  if (!store.has('userSettings')) {
    store.set('userSettings', {
      rememberMe: false,
      email: '',
      lastUsedProfile: '',
      exportFormat: 'csv',
      autoStartScraping: false
    });
  }
  
  if (!store.has('lastFilters')) {
    store.set('lastFilters', {
      jobTitle: '',
      location: '',
      industry: '',
      limit: 50,
      skipApolloMissing: true
    });
  }
}

// Get user settings
ipcMain.handle('get-settings', () => {
  return {
    userSettings: store.get('userSettings'),
    lastFilters: store.get('lastFilters')
  };
});

// Save user settings
ipcMain.handle('save-settings', (event, settings) => {
  if (settings.userSettings) {
    store.set('userSettings', settings.userSettings);
  }
  if (settings.lastFilters) {
    store.set('lastFilters', settings.lastFilters);
  }
  return { success: true };
});

// Login with LinkedIn credentials
ipcMain.handle('login-with-credentials', async (event, { email, password, rememberMe }) => {
  try {
    mainWindow.webContents.send('update-log', 'Starting LinkedIn login process...');
    const userDataDir = path.join(os.homedir(), 'AppData', 'Local', 'Google', 'Chrome', 'User Data');
    const automationProfilePath = path.join(userDataDir, 'Default');
    const options = {
      useCredentials: true,
      email,
      password,
      profilePath: automationProfilePath,
      loginOnly: true
    };
    const result = await chromeApolloFinder.main(
      options,
      (log) => mainWindow.webContents.send('update-log', log),
      () => {},
      () => {}
    );
    if (result.success) {
      store.set('linkedinCookies', result.cookies);
      if (rememberMe) {
        const userSettings = store.get('userSettings');
        userSettings.rememberMe = true;
        userSettings.email = email;
        store.set('userSettings', userSettings);
      }
      mainWindow.webContents.send('update-log', 'Login successful! Cookies saved.');
      return { success: true };
    }
    return { success: false, error: result.error || 'Login failed. Please check your credentials.' };
  } catch (error) {
    mainWindow.webContents.send('update-log', `Error during login: ${error.message}`);
    return { success: false, error: error.message };
  }
});

// Login with imported cookies
ipcMain.handle('login-with-cookies', async (event, cookiesData) => {
  try {
    mainWindow.webContents.send('update-log', 'Starting login with cookies...');
    let cookies;
    try {
      cookies = JSON.parse(cookiesData);
    } catch (e) {
      return { success: false, error: 'Invalid cookie format' };
    }
    const userDataDir = path.join(os.homedir(), 'AppData', 'Local', 'Google', 'Chrome', 'User Data');
    const automationProfilePath = path.join(userDataDir, 'Default');
    const options = {
      cookies,
      profilePath: automationProfilePath,
      loginOnly: true
    };
    const result = await chromeApolloFinder.main(
      options,
      (log) => mainWindow.webContents.send('update-log', log),
      () => {},
      () => {}
    );
    if (result.success) {
      store.set('linkedinCookies', result.cookies);
      mainWindow.webContents.send('update-log', 'Login with cookies successful!');
      return { success: true };
    }
    return { success: false, error: result.error || 'Login with cookies failed.' };
  } catch (error) {
    mainWindow.webContents.send('update-log', `Error during cookie login: ${error.message}`);
    return { success: false, error: error.message };
  }
});

// Import cookies from file
ipcMain.handle('import-cookies-from-file', async () => {
  try {
    const result = await dialog.showOpenDialog(mainWindow, {
      properties: ['openFile'],
      filters: [{ name: 'JSON', extensions: ['json'] }]
    });
    
    if (result.canceled) {
      return { success: false, error: 'File selection canceled' };
    }
    
    const filePath = result.filePaths[0];
    const cookiesData = fs.readFileSync(filePath, 'utf8');
    
    // Parse and validate cookies
    try {
      const cookies = JSON.parse(cookiesData);
      store.set('linkedinCookies', cookies);
      mainWindow.webContents.send('update-log', 'Cookies imported successfully.');
      return { success: true, cookies };
    } catch (e) {
      return { success: false, error: 'Invalid cookie format' };
    }
  } catch (error) {
    mainWindow.webContents.send('update-log', `Error importing cookies: ${error.message}`);
    return { success: false, error: error.message };
  }
});

// Start lead extraction
ipcMain.handle('start-extraction', async (event, filters) => {
  if (extractionInProgress) {
    return { success: false, error: 'Extraction already in progress' };
  }
  extractionInProgress = true;
  extractedLeads = [];
  try {
    store.set('lastFilters', filters);
    mainWindow.webContents.send('update-log', 'Starting lead extraction...');
    mainWindow.webContents.send('update-log', `Filters: ${JSON.stringify(filters)}`);
    const userDataDir = path.join(os.homedir(), 'AppData', 'Local', 'Google', 'Chrome', 'User Data');
    const automationProfilePath = path.join(userDataDir, 'Default');
    const storedCookies = store.get('linkedinCookies');
    if (!storedCookies || storedCookies.length === 0) {
      mainWindow.webContents.send('update-log', 'No stored cookies found. Please login first.');
      extractionInProgress = false;
      return { success: false, error: 'Authentication required' };
    }
    // Get already extracted profile URLs
    const alreadyExtractedLeads = store.get('allExtractedLeads', []);
    const skipProfileUrls = alreadyExtractedLeads.map(lead => lead.profileUrl).filter(Boolean);
    const options = {
      cookies: storedCookies,
      profilePath: automationProfilePath,
      filters,
      skipProfileUrls
    };
    const result = await chromeApolloFinder.main(
      options,
      (log) => mainWindow.webContents.send('update-log', log),
      (progress) => mainWindow.webContents.send('update-progress', progress),
      (leadData) => {
        extractedLeads.push(leadData);
        mainWindow.webContents.send('lead-extracted', leadData);
      }
    );
    if (result.success) {
      if (result.cookies) {
        store.set('linkedinCookies', result.cookies);
      }
      mainWindow.webContents.send('update-log', `Extraction completed. ${result.leads.length} leads found.`);
      mainWindow.webContents.send('leads-extracted', result.leads);
      extractionInProgress = false;
      return { success: true, count: result.leads.length };
    } else {
      mainWindow.webContents.send('update-log', `Extraction failed: ${result.error}`);
      extractionInProgress = false;
      return { success: false, error: result.error };
    }
  } catch (error) {
    mainWindow.webContents.send('update-log', `Error during extraction: ${error.message}`);
    extractionInProgress = false;
    return { success: false, error: error.message };
  }
});

// Export leads to CSV
ipcMain.handle('export-to-csv', async (event, leads) => {
  try {
    const result = await dialog.showSaveDialog(mainWindow, {
      title: 'Save CSV File',
      defaultPath: 'linkedin-leads.csv',
      filters: [{ name: 'CSV Files', extensions: ['csv'] }]
    });
    
    if (result.canceled) {
      return { success: false, error: 'Export canceled' };
    }
    
    await exportToCSV(leads, result.filePath);
    mainWindow.webContents.send('update-log', `Exported ${leads.length} leads to CSV: ${result.filePath}`);
    return { success: true, filePath: result.filePath };
  } catch (error) {
    mainWindow.webContents.send('update-log', `Error exporting to CSV: ${error.message}`);
    return { success: false, error: error.message };
  }
});

// Export leads to Excel
ipcMain.handle('export-to-excel', async (event, leads) => {
  try {
    const result = await dialog.showSaveDialog(mainWindow, {
      title: 'Save Excel File',
      defaultPath: 'linkedin-leads.xlsx',
      filters: [{ name: 'Excel Files', extensions: ['xlsx'] }]
    });
    
    if (result.canceled) {
      return { success: false, error: 'Export canceled' };
    }
    
    await exportToExcel(leads, result.filePath);
    mainWindow.webContents.send('update-log', `Exported ${leads.length} leads to Excel: ${result.filePath}`);
    return { success: true, filePath: result.filePath };
  } catch (error) {
    mainWindow.webContents.send('update-log', `Error exporting to Excel: ${error.message}`);
    return { success: false, error: error.message };
  }
});

// Clean up on app exit
app.on('before-quit', async () => {
  if (browser) {
    await browser.close();
    browser = null;
  }
});

// Find Chrome profiles
ipcMain.handle('find-chrome-profiles', async () => {
  try {
    mainWindow.webContents.send('update-log', 'Scanning for Chrome profiles with Apollo extension...');
    const userDataDir = path.join(os.homedir(), 'AppData', 'Local', 'Google', 'Chrome', 'User Data');
    const automationProfilePath = path.join(userDataDir, 'Default');
    if (!fs.existsSync(automationProfilePath)) {
      mainWindow.webContents.send('update-log', 'Default Chrome profile not found.');
      return { success: false, error: 'Default Chrome profile not found' };
    }
    mainWindow.webContents.send('update-log', `Using Default Chrome profile: ${automationProfilePath}`);
    return {
      success: true,
      profiles: [{ profileName: 'Default', profilePath: automationProfilePath }],
      selectedProfile: { profileName: 'Default', profilePath: automationProfilePath }
    };
  } catch (error) {
    mainWindow.webContents.send('update-log', `Error finding Chrome profiles: ${error.message}`);
    return { success: false, error: error.message };
  }
});

// Launch Chrome browser manually without automation
ipcMain.handle('launch-chrome-manual', async () => {
  try {
    const chromePath = chromeApolloFinder.findChromeExecutable();
    if (!chromePath) {
      mainWindow.webContents.send('update-log', 'Chrome not found. Please make sure Google Chrome is installed.');
      return { success: false, error: 'Chrome not found' };
    }
    
    const userDataDir = path.join(os.homedir(), 'AppData', 'Local', 'Google', 'Chrome', 'PuppeteerProfile');
    mainWindow.webContents.send('update-log', 'Launching Chrome browser manually...');
    
    // Launch Chrome with the default profile
    exec(`"${chromePath}" --user-data-dir="${userDataDir}"`);
    mainWindow.webContents.send('update-log', 'Chrome browser launched manually.');
    
    return { success: true };
  } catch (error) {
    mainWindow.webContents.send('update-log', `Error launching Chrome: ${error.message}`);
    return { success: false, error: error.message };
  }
});

// Get all extracted leads
ipcMain.handle('get-all-leads', async () => {
  return store.get(ALL_LEADS_KEY, []);
});

// Save all extracted leads
ipcMain.handle('save-all-leads', async (event, leads) => {
  store.set(ALL_LEADS_KEY, leads);
  return { success: true };
});
