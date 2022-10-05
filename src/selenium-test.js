const { exit } = require("process");
const { Builder, Capabilities, By } = require("selenium-webdriver");
var capabilities = Capabilities.chrome();

(async function helloSelenium() {
  const driverUrl = "http://selchrome:4444";
  let driver = new Builder()
    .usingServer(driverUrl)
    .withCapabilities(capabilities)
    .build();
  try {
    const url = 'https://foaas.com/cool/RRR2D2';
    await driver.get(url);
    const title = await driver.getTitle();
    console.log(`Got the title of the page, ${title}`);
    const em = await driver.findElement(By.css('p>em'));
    const text = await em.getText();
    const expected = '- RRR2D2';
    if (text !== expected) {
      throw new Error(`Expected "${text}" to equal ${expected}`);
    }
  } catch (e) {
    console.error('Unexpected!', e);
    exit(1);
  } finally {
    await driver.quit();
  }
})();
