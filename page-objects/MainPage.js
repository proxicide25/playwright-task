export class MainPage {
    constructor(page) {
        this.page = page
        this.goToLoginPageButton = page.locator("[class='_navbarItem_q55bt_1']").nth(4)
    }

    visit = async () => {
        await this.page.goto('/')
    }

    goToLoginPage = async () => {
        await this.goToLoginPageButton.waitFor()
        await this.goToLoginPageButton.click()
    }

}