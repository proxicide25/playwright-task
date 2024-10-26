export class CreateProfilePage {
    constructor(page) {
        this.page = page
        this.createProfileText = page.locator("[class='bff24867 _7cbdd1ba fb8d74bb']")
    }

    isAtCreateProfilePage = async () => {
        await this.createProfileText.waitFor()
    }

}