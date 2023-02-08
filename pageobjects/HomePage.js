class HomePage {
    constructor(page) {
        this.page = page;
        this.loginHeader = page.locator("//ul[@id='main-menu']/li/a[text()[contains(.,\"Login Page\")]]");
    }

    async baseUrl() {
        await this.page.goto("http://www.77bugs.pl");
    }

    async goToLoginHeader() {
        await this.loginHeader.click();
    }

}

module.exports = { HomePage };
