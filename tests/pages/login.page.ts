import BasePage from "./base.page";

const androidLocators = {
    lockedUserMessage: `android=${'new UiSelector().text("Sorry, this user has been locked out.")'}`,
}

const commonLocators = {
    loginButton: '~test-LOGIN',
    enterCreds : '~test-standard_user',
    lockedUserCreds : '~test-locked_out_user',
}

const iOSLocators = {
    lockedUserMessage : '~Sorry, this user has been locked out.',
}

export default class LoginPage extends BasePage{

    lockedUserMessage = driver.isIOS ? iOSLocators.lockedUserMessage
        : androidLocators.lockedUserMessage ;

    async isAppLaunched():Promise<boolean> {
        return await this.verifyElementIsDisplayed(commonLocators.loginButton);
    }

    async login() {
        await this.clickOnLocatorWithSwipeUp(commonLocators.enterCreds);
        await this.clickOnLocatorWithSwipeDown(commonLocators.loginButton);
    }

    async loginWithLockedOutUser() {
        await this.clickOnLocatorWithSwipeUp(commonLocators.lockedUserCreds);
        await this.clickOnLocatorWithSwipeDown(commonLocators.loginButton);
    }

    async getUserLockedOutMessage():Promise<string> {
        return await this.getComponentText(this.lockedUserMessage);
    }

}