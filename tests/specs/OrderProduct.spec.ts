import { assert } from 'chai';
import LoginPage from "../pages/login.page";
import ProductsPage from "../pages/products.page";
import CartsPage from "../pages/carts.page";
import CheckoutPage from "../pages/checkout.page";
import {ExpectedAssertions} from "../testdata/ExpectedAssertions";
import {TestData} from "../testdata/testData";

describe('Order Product from Swag labs', () => {

    let login: LoginPage;
    let product: ProductsPage;
    let cart: CartsPage;
    let checkout:CheckoutPage;

    beforeEach(async () => {
        login = new LoginPage();
        product = new ProductsPage();
        cart = new CartsPage();
        checkout = new CheckoutPage();
    });

    it('should be able to order product', async () => {
        assert.isTrue(
            await login.isAppLaunched(),
            'App is not launched ',
        );
        await login.login();
        assert.isTrue(
            await product.isProductsPageDisplayed(),
            'Products page is not displayed ',
        );
        await product.addProductToCart();
        assert.equal(
            await product.getCartCount(),
           ExpectedAssertions.cart.cartCount,
            'cart item count assertion failed ',
        );
        await product.navigateToCartPage();
        assert.isTrue(
            await cart.isCartsPageDisplayed(),
            'Carts page is not displayed',
        );
        assert.equal(
            await cart.getCartItemName(),
            ExpectedAssertions.cart.cartItemName,
            'Cart item name assertion failed ',
        );
        await cart.proceedToCheckout();
        assert.isTrue(
            await checkout.isCheckoutPageDisplayed(),
            'Checkout page is not displayed ',
        );
        await checkout.enterCheckoutInfo(TestData.checkout.firstName,
            TestData.checkout.lastName,TestData.checkout.zipCode);
        await checkout.continueCheckout();
        await checkout.finishCheckout();
        assert.equal(
            await checkout.getOrderSuccessMessage(),
            ExpectedAssertions.checkOut.successMessage,
            'Order success message assertion failed ',
        );
       await checkout.logout();
        assert.isTrue(
            await login.isAppLaunched(),
            'App is not launched ',
        );
    });

    it('should display user locked out error', async () => {
        await login.loginWithLockedOutUser();
        assert.equal(
            await login.getUserLockedOutMessage(),
            ExpectedAssertions.lockedUser.errorMessage,
            'User locked out error message assertion failed',
        );
    })

});