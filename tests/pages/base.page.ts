import Gestures from "../helpers/Gestures"

const commonLocators = {
    hamburgerIcon: '~test-Menu',
    logoutMenuItem: '~test-LOGOUT',
}

export default class BasePage {

    async clickOnLocator(locator: string):Promise<void> {
        await this.waitForComponentToLoad(
            locator,
            20000,
            `expected ${locator} element to load in 20s`,
            100,
        );

        await $(locator).click();
    }

    async waitForComponentToLoad(
        locator: string,
        timeoutinSec: number,
        msg: string,
        internalMS: number,
    ):Promise<void> {
        await driver.waitUntil(async () => await $(locator).isDisplayed(), {
            timeout: timeoutinSec,
            timeoutMsg: msg,
            interval: internalMS,
        });
    }

    async verifyElementIsDisplayed (locator: string, maxScrolls = 3):Promise<boolean> {
        try {
            if (!await $(locator).isDisplayed()) {
                await Gestures.checkIfDisplayedWithSwipeUp(await $(locator), maxScrolls);
                return await $(locator).isDisplayed();
            }
           return await $(locator).isDisplayed();
        } catch (e) {
            return await $(locator).isDisplayed();
        }
    }

    async getComponentText (locator: string):Promise<string>  {
        await this.waitForComponentToLoad(
            locator,
            20000,
            `expected ${locator} element to load in 20s`,
            100,
        );
        return await $(locator).getText();
    }

    async clickOnLocatorWithSwipeUp (locator: string, maxScrolls = 3):Promise<void> {
        try {
            if (!await $(locator).isDisplayed()) {
                await Gestures.checkIfDisplayedWithSwipeUp(await $(locator), maxScrolls);
            }
            await $(locator).click();
        } catch (e) {
            console.log(`${locator} not found`);
        }
    }

    async clickOnLocatorWithSwipeDown (locator: string, maxScrolls = 3):Promise<void> {
        try {
            if (!await $(locator).isDisplayed()) {
                await Gestures.checkIfDisplayedWithSwipeDown(await $(locator), maxScrolls);
            }
            await $(locator).click();
        } catch (e) {
            console.log(`${locator} not found`);
        }
    }

    async enterDetails (locator: string, value: string):Promise<void> {
        await this.clickOnLocatorWithSwipeUp(locator);
        await $(locator).addValue(value);
    }

    async logout():Promise<void> {
        await this.clickOnLocatorWithSwipeUp(commonLocators.hamburgerIcon);
        await this.clickOnLocatorWithSwipeUp(commonLocators.logoutMenuItem);
    }

}