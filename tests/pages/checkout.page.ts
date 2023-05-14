import BasePage from "./base.page";

const androidLocators = {
    checkoutPageHeader: `android=${'new UiSelector().text("CHECKOUT: INFORMATION")'}`,
    orderSuccessMsg: '//android.widget.ScrollView[@content-desc="test-CHECKOUT: COMPLETE!"]/android.view.ViewGroup/android.widget.TextView[1]',
}

const iOSLocators = {
    checkoutPageHeader: `-ios class chain:${'**/XCUIElementTypeStaticText[`label == "CHECKOUT: INFORMATION"`]'}`,
    orderSuccessMsg: '~THANK YOU FOR YOU ORDER',
    return:'~Return',
}

const commonLocators = {
    continueBtn: '~test-CONTINUE',
    firstName: '~test-First Name',
    lastName: '~test-Last Name',
    zipCode: '~test-Zip/Postal Code',
    finishBtn: '~test-FINISH',
}

export default class CheckoutPage extends BasePage {

    checkoutPageHeader = driver.isIOS ? iOSLocators.checkoutPageHeader
        : androidLocators.checkoutPageHeader;

    orderSuccessMsg = driver.isIOS ? iOSLocators.orderSuccessMsg
        : androidLocators.orderSuccessMsg;

    async isCheckoutPageDisplayed():Promise<boolean> {
        return await this.verifyElementIsDisplayed(this.checkoutPageHeader);
    }

    async hideKeyboard():Promise<void> {
        (driver.isAndroid) ? await driver.hideKeyboard()
            : await this.clickOnLocatorWithSwipeUp(iOSLocators.return);
    }

    async enterCheckoutInfo(firstName:string,lastName:string,zipCode:string):Promise<void> {
        await this.enterDetails(commonLocators.firstName,firstName);
        await this.enterDetails(commonLocators.lastName,lastName);
        await this.enterDetails(commonLocators.zipCode,zipCode);
        await this.hideKeyboard();
    }

    async continueCheckout():Promise<void> {
        await this.clickOnLocatorWithSwipeUp(commonLocators.continueBtn);
    }

    async finishCheckout():Promise<void> {
        await this.clickOnLocatorWithSwipeUp(commonLocators.finishBtn);
    }

    async getOrderSuccessMessage():Promise<string> {
        return await this.getComponentText(this.orderSuccessMsg);
    }

}