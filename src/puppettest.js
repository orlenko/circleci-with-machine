const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://foaas.com/cool/RRR2D2');
  const h1 = await page.$('h1');
  console.log(`Got the page, and its header says, ${await h1.getProperty('innerHTML')}`);

  await browser.close();
})();
