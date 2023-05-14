import BasePage from "./base.page";

const androidLocators = {
    products: `android=${'new UiSelector().text("PRODUCTS")'}`,
    addToCartBtn: '(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[1]',
    cartIcon: '//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.TextView',
    cartCount: '//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.TextView',
}

const iOSLocators = {
    products: `-ios class chain:${'**/XCUIElementTypeStaticText[`label == "PRODUCTS"`]'}`,
    addToCartBtn: `-ios class chain:${'**/XCUIElementTypeOther[`label == "ADD TO CART"`][1]'}`,
    cartIcon: '~test-Cart',
    cartCount:`-ios class chain:${'**/XCUIElementTypeOther[`label == "1"`][5]'}`,
}

export default class ProductsPage extends BasePage{

    products = driver.isIOS ? iOSLocators.products
        : androidLocators.products ;

    addToCartBtn = driver.isIOS ? iOSLocators.addToCartBtn
        : androidLocators.addToCartBtn;

    cartIcon = driver.isIOS ? iOSLocators.cartIcon
        : androidLocators.cartIcon;

    cartCount = driver.isIOS ? iOSLocators.cartCount
        : androidLocators.cartCount;

    async isProductsPageDisplayed():Promise<boolean> {
        return await this.verifyElementIsDisplayed(this.products);
    }

    async addProductToCart():Promise<void>  {
        await this.clickOnLocatorWithSwipeUp(this.addToCartBtn);
    }

    async getCartCount():Promise<string> {
        return await this.getComponentText(this.cartCount);
    }

    async navigateToCartPage():Promise<void> {
        await this.clickOnLocatorWithSwipeUp(this.cartIcon);
    }

}