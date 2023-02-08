const { HomePage } = require('./HomePage');
const { LoginPage } = require('./LoginPage');
const { CategoryWomanPage } = require('./CategoryWomanPage');
const { ProductDetailsPage } = require('./ProductDetailsPage');
const { CartPage } = require('./CartPage');
const { CheckoutPage } = require('./CheckoutPage');

class POManager {
    constructor(page) {
        this.page = page;
        this.homePage = new HomePage(this.page);
        this.loginPage = new LoginPage(this.page);
        this.categoryWomanPage = new CategoryWomanPage(this.page);
        this.productDetailsPage = new ProductDetailsPage(this.page);
        this.cartPage = new CartPage(this.page);
        this.checkoutPage = new CheckoutPage(this.page);
    }

    getHomePage() {
        return this.homePage;
    }

    getLoginPage() {
        return this.loginPage;
    }

    getCategoryWomanPage() {
        return this.categoryWomanPage;
    }

    getProductDetailsPage() {
        return this.productDetailsPage;
    }

    getCartPage() {
        return this.cartPage;
    }

    getCheckoutPage() {
        return this.checkoutPage;
    }

}

module.exports = { POManager };