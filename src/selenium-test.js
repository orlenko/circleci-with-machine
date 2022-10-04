driver = await new Builder().forBrowser('chrome').build();
await driver.get('https://foaas.com/cool/RRR2D2');
let title = await driver.getTitle();
console.log(`The title is ${title}`);
