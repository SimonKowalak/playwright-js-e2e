const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageobjects/POManager');

test('Visual testing: comparison Top Menu', async ({ page }) => {
    const poManager = new POManager(page);
    const customerName = "Customer123";
    const homePage = poManager.getHomePage();
    homePage.baseUrl();
    expect(await page.locator("#page-header").screenshot()).toMatchSnapshot('topmenu.png');
});

test('Visual testing: comparison Footer', async ({ page }) => {
    const poManager = new POManager(page);
    const customerName = "Customer123";
    const homePage = poManager.getHomePage();
    homePage.baseUrl();
    expect(await page.locator("#page-footer").screenshot()).toMatchSnapshot('footer.png');
});

