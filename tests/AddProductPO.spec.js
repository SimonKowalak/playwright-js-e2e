const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageobjects/POManager');
const dataSet = JSON.parse(JSON.stringify(require("../utils/AddProductPOTestData.json")));

test(' Customer login to online shop', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const poManager = new POManager(page);
    const homePage = poManager.getHomePage();
    await homePage.baseUrl();
    await homePage.goToLoginHeader();
    const loginPage = poManager.getLoginPage();
    await loginPage.customerLogin(dataSet.customerName, dataSet.password);
    await loginPage.goToCategoryWoman(page);
    const categoryWomanPage = poManager.getCategoryWomanPage();
    await categoryWomanPage.goToProductDetails(page);
    const productDetailsPage = poManager.getProductDetailsPage();
    await productDetailsPage.clickAddToCartButton();
    const cartPage = poManager.getCartPage();
    await cartPage.goToCheckoutPage(page);
    const buttonPlaceOrder = page.locator("#place_order");
    await buttonPlaceOrder.click();
    const checkoutPage = poManager.getCheckoutPage();
    await checkoutPage.goToOrderDetailsPage();
    await page.waitForNavigation();
    console.log(checkoutPage.getTextOrderHasBeenReceived);
});

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

