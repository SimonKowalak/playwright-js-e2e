const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageobjects/POManager');
let webContext;
const dataSet = JSON.parse(JSON.stringify(require("../utils/AddProductPOTestData.json")));

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const poManager = new POManager(page);
    const homePage = poManager.getHomePage();
    await homePage.baseUrl();
    await homePage.goToLoginHeader();
    const loginPage = poManager.getLoginPage();
    await loginPage.customerLogin(dataSet.customerName, dataSet.password);
    await loginPage.goToCategoryWoman(page);
    await context.storageState({ path: 'state.json' });
    webContext = await browser.newContext({ storageState: 'state.json' });
})

test('Validate expected logged Client', async ({ }) => {
    const page = await webContext.newPage();
    await page.goto("http://www.77bugs.pl/my-account/");
    await expect(page.locator("//div[@class='woocommerce-MyAccount-content']/p/strong[1]")).toContainText(dataSet.customerName);

});

test('Validate left menu button "Dashboard" ', async ({ }) => {
    const page = await webContext.newPage();
    await page.goto("http://www.77bugs.pl/my-account/");
    await expect(page.locator("//nav[@class='woocommerce-MyAccount-navigation']/ul/li[1]/a")).toContainText("Dashboard");
});

test('Validate left menu button "Orders" ', async ({ }) => {
    const page = await webContext.newPage();
    await page.goto("http://www.77bugs.pl/my-account/");
    await expect(page.locator("//nav[@class='woocommerce-MyAccount-navigation']/ul/li[2]/a")).toContainText("Orders");
});

test('Validate left menu button "Downloads" ', async ({ }) => {
    const page = await webContext.newPage();
    await page.goto("http://www.77bugs.pl/my-account/");
    await expect(page.locator("//nav[@class='woocommerce-MyAccount-navigation']/ul/li[3]/a")).toContainText("Downloads");
});

test('Validate left menu button "Addresses" ', async ({ }) => {
    const page = await webContext.newPage();
    await page.goto("http://www.77bugs.pl/my-account/");
    await expect(page.locator("//nav[@class='woocommerce-MyAccount-navigation']/ul/li[4]/a")).toContainText("Addresses");
});

test('Validate left menu button "Account details" ', async ({ }) => {
    const page = await webContext.newPage();
    await page.goto("http://www.77bugs.pl/my-account/");
    await expect(page.locator("//nav[@class='woocommerce-MyAccount-navigation']/ul/li[5]/a")).toContainText("Account details");
});

test('Validate left menu button "Logout" ', async ({ }) => {
    const page = await webContext.newPage();
    await page.goto("http://www.77bugs.pl/my-account/");
    await expect(page.locator("//nav[@class='woocommerce-MyAccount-navigation']/ul/li[6]/a")).toContainText("Logout");
});




