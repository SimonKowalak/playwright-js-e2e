class CheckoutPage {
  constructor(page) {
    this.buttonPlaceOrder = page.locator("#place_order");
    this.orderProductName = page.locator("//td[@class='woocommerce-table__product-name product-name']/a");
    this.orderHasBeenReceived = page.locator("//div[@class='woocommerce-order']/p");

  }

  async goToOrderDetailsPage() {
    await this.buttonPlaceOrder.click();

  }

  async waitForProductLinks() {
    await this.page(this.orderProductName);
  }

  async getTextOrderHasBeenReceived() {
    await this.orderHasBeenReceived.textContent();
  }
}

module.exports = { CheckoutPage };