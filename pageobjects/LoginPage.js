class LoginPage {
    constructor(page) {
        this.page = page;
        this.userName = page.locator("#username");
        this.password = page.locator("#password");
        this.loginButton = page.locator("//button[@name='login']");
        this.categoryWoman = page.locator("#menu-item-100");
        this.loggedCustomerNameValidation = page.locator("//div[@class='woocommerce-MyAccount-content']/p/strong[1]");
        this.customerSiteLoginPageTextValidation = page.locator(".page-title");
    }

    async customerLogin(customerName, password) {
        await this.userName.fill(customerName);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    async goToCategoryWoman() {
        await Promise.all(

            [

                this.page.waitForNavigation(),
                await this.categoryWoman.click(),

            ]
        );
    }

}

module.exports = { LoginPage };
