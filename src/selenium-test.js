const {Builder} = require('selenium-webdriver');
require("chromedriver");

(async function helloSelenium() {
    let driver = await new Builder().forBrowser('chrome').build();

    await driver.get('https://foaas.com/cool/RRR2D2');

    const title = await driver.getTitle();
    console.log(`Got the title of the page, ${title}`);

    await driver.quit();
})();
