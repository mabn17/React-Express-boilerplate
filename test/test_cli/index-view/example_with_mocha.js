/* eslint-disable */
const assert = require('assert');
const test = require('selenium-webdriver/testing');
const webdriver = require('selenium-webdriver');
const os = require('os');
const By = webdriver.By;

let browser;

test.describe('Route page test', function() {
  test.beforeEach(function(done) {
    this.timeout(20000);
    browser = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build();

    browser.get('http://localhost:8080/');
    done();
  });

  test.afterEach(function(done) {
    browser.quit();
    done();
  });

  function goToNavLink(target) {
    browser.findElement(By.linkText(target)).then(function(element) {
      element.click();
    });
  }

  function matchUrl(target) {
    browser.getCurrentUrl().then(function(url) {
      assert.ok(url.endsWith(target));
    });
  }

  function assertH1(target) {
    browser.findElement(By.css('h1')).then(function(element) {
      element.getText().then(function(text) {
        assert.equal(text, target);
      });
    });
  }

  test.it('Index test', function(done) {
    // Clicking navigation
    goToNavLink('Hem');

    // gets the header 1
    assertH1(`Hello ${os.userInfo().username}`);
    matchUrl('');

    done();
  });
});
/* eslint-enable */
