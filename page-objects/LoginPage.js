export class LoginPage {
    constructor(page) {
        this.page = page
        this.goToRegistrationButton = page.locator("[href='/auth/signup']")
    }

    isAtLoginPage = async () => {
        await this.goToRegistrationButton.waitFor()
    }

    goToRegistrationPage = async () => {
        await this.goToRegistrationButton.click()
    }
}