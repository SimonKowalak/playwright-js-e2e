class CategoryWomanPage {
    constructor(page) {
        this.product = page.locator("//ul[@class='products columns-3']/li//*[text()[contains(.,\"Pink elegant high heels\")]]");
    }

    async goToProductDetails() {
        await this.product.click();

    }
}

module.exports = { CategoryWomanPage };