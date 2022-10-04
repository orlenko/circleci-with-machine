const { exit } = require("process");
const { Builder, Capabilities } = require("selenium-webdriver");
var capabilities = Capabilities.chrome();

(async function helloSelenium() {
  let driver = new Builder()
        .usingServer("http://selchrome:4444")
        .withCapabilities(capabilities)
        .build();
    try {
        await driver.get('https://foaas.com/cool/RRR2D2');
        const title = await driver.getTitle();
        console.log(`Got the title of the page, ${title}`);
    } catch(e) {
      console.error('Unexpected!', e);
    } finally {
        await driver.quit();
        exit(1);
    }
})();
