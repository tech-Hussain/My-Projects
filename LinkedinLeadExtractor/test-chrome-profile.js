const puppeteer = require('puppeteer');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'C:\\Users\\Hussain\\AppData\\Local\\Google\\Chrome\\PuppeteerProfile';

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      executablePath: chromePath,
      userDataDir: userDataDir,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ],
      ignoreDefaultArgs: ['--disable-extensions']
    });

    const page = await browser.newPage();
    await page.goto('chrome://extensions/', { waitUntil: 'networkidle2' });

    console.log(`Check if all your extensions are visible/enabled.`);
    await new Promise(resolve => setTimeout(resolve, 90000));

    await browser.close();
  } catch (err) {
    console.error('Failed to launch system Chrome with extensions:', err);
  }
})(); 