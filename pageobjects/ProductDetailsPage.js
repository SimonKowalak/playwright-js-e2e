class ProductDetailsPage {
    constructor(page) {
        this.buttonAddToCart = page.locator("//button[@name='add-to-cart']");
    }

    async clickAddToCartButton() {
        await this.buttonAddToCart.click();
    }
}

module.exports = { ProductDetailsPage };