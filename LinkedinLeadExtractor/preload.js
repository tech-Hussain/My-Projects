const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electron', {
  settingsService: {
    getSettings: () => ipcRenderer.invoke('get-settings'),
    saveSettings: (settings) => ipcRenderer.invoke('save-settings', settings),
    findChromeProfiles: () => ipcRenderer.invoke('find-chrome-profiles'),
    setChromeProfile: (profilePath) => ipcRenderer.invoke('set-chrome-profile', profilePath)
  },
  linkedinService: {
    loginWithCredentials: (credentials) => ipcRenderer.invoke('login-with-credentials', credentials),
    loginWithCookies: (cookies) => ipcRenderer.invoke('login-with-cookies', cookies),
    importCookiesFromFile: () => ipcRenderer.invoke('import-cookies-from-file'),
    startExtraction: (filters) => ipcRenderer.invoke('start-extraction', filters),
    getAllLeads: () => ipcRenderer.invoke('get-all-leads'),
    saveAllLeads: (leads) => ipcRenderer.invoke('save-all-leads', leads)
  },
  exportService: {
    exportToCSV: (leads) => ipcRenderer.invoke('export-to-csv', leads),
    exportToExcel: (leads) => ipcRenderer.invoke('export-to-excel', leads)
  },
  listener: {
    onUpdateLog: (callback) => ipcRenderer.on('update-log', (_, message) => callback(message)),
    onUpdateProgress: (callback) => ipcRenderer.on('update-progress', (_, progress) => callback(progress)),
    onLeadsExtracted: (callback) => ipcRenderer.on('leads-extracted', (_, leads) => callback(leads)),
    onLeadExtracted: (callback) => ipcRenderer.on('lead-extracted', (_, lead) => callback(lead)),
    onTrayAction: (callback) => ipcRenderer.on('tray-action', (_, action) => callback(action)),
    removeAllListeners: () => {
      ipcRenderer.removeAllListeners('update-log');
      ipcRenderer.removeAllListeners('update-progress');
      ipcRenderer.removeAllListeners('leads-extracted');
      ipcRenderer.removeAllListeners('lead-extracted');
    }
  },
  util: {
    launchChromeManual: () => ipcRenderer.invoke('launch-chrome-manual')
  }
});
