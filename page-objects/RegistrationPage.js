export class RegistrationPage {
    constructor(page) {
        this.page = page
        this.emailInput = page.locator("[id='element-4']")
        this.passwordInput = page.locator("[id='element-6']")
        this.registerButton = page.locator("[data-gtm-id='start-email-signup']")
    }

    registerNewUser = async (email, password) => {
        await this.emailInput.waitFor()
        await this.emailInput.fill(email)
        await this.passwordInput.waitFor()
        await this.passwordInput.fill(password)
        await this.registerButton.waitFor()
        await this.registerButton.click()
    }

}