import { test } from "@playwright/test"
import { MainPage } from "../page-objects/MainPage.js"
import { LoginPage } from "../page-objects/LoginPage.js"
import { RegistrationPage } from "../page-objects/RegistrationPage.js"
import { CreateProfilePage } from "../page-objects/CreateProfilePage.js"
import { v4 as uuidv4} from "uuid"

test("Register Happy Path", async ({ page }) => {
    const mainPage = new MainPage(page)
    await mainPage.visit()
    await mainPage.goToLoginPage()
    const loginPage = new LoginPage(page)
    await loginPage.isAtLoginPage()
    await loginPage.goToRegistrationPage()
    const registrationPage = new RegistrationPage(page)
    const email = uuidv4() + "@gmail.com"
    const password = uuidv4()
    await registrationPage.registerNewUser(email, password)
    const createProfilePage = new CreateProfilePage(page)
    await createProfilePage.isAtCreateProfilePage()
});