class CartPage {
    constructor(page) {
        this.buttonProceedToCheckout = page.locator(".wc-proceed-to-checkout");
    }

    async goToCheckoutPage() {
        await this.buttonProceedToCheckout.click();

    }
}

module.exports = { CartPage };