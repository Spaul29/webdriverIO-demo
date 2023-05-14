import BasePage from "./base.page";

const androidLocators = {
    cartItemName: '//android.view.ViewGroup[@content-desc="test-Description"]/android.widget.TextView[1]',
    cartPageHeader: `android=${'new UiSelector().text("YOUR CART")'}`,
}

const iOSLocators = {
    cartItemName: '~Sauce Labs Backpack',
    cartPageHeader:`-ios class chain:${'**/XCUIElementTypeStaticText[`label == "YOUR CART"`]'}`,
}

const commonLocators = {
    checkoutBtn: '~test-CHECKOUT',
}

export default class CartsPage extends BasePage {

    cartPageHeader = driver.isIOS ? iOSLocators.cartPageHeader
        : androidLocators.cartPageHeader;

    cartItemName = driver.isIOS ? iOSLocators.cartItemName
        : androidLocators.cartItemName;

    async isCartsPageDisplayed():Promise<boolean> {
        return await this.verifyElementIsDisplayed(this.cartPageHeader);
    }

    async getCartItemName():Promise<string> {
        return await this.getComponentText(this.cartItemName);
    }

    async proceedToCheckout():Promise<void>  {
        await this.clickOnLocatorWithSwipeUp(commonLocators.checkoutBtn);
    }

}