/**
 * Test for getting started with Selenium.
 */

/* eslint-disable */
const webdriver = require('selenium-webdriver');

const browser = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build();

browser.get('http://localhost:8080/');

// Two different ways to work with promises
// Way 1
const promise = browser.getTitle();

promise.then(title => {
  console.log(title);
});

// Way 2
browser.getTitle().then(title => {
  console.log(title);
});

browser.quit();
/* eslint-enable */
