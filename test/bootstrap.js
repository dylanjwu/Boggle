const puppeteer = require('puppeteer');
const { expect, assert } = require('chai');
const _ = require('lodash');
const globalVariables = _.pick(global, ['browser', 'expect', 'assert']);

// puppeteer options
const opts = {
    headless: false,
    slowMo: 100,
    timeout: 30000
};

// expose variables
before(async function() {
    global.expect = expect;
    global.assert = assert;
    global.browser = await puppeteer.launch();
});

// close browser and reset global variables
after(function() {
    browser.close();

    global.assert = globalVariables.assert;
    global.browser = globalVariables.browser;
    global.expect = globalVariables.expect;
});