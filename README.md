# Test automation framework for mobile automation using WebdriverIO and Appium 2.0

## Tech stack
- webdriverIO: 8.##.#
- appium: 2.0.0-beta.#

#Language
- Typescript

#Reporting
- Spec
- Allure

## Local machine setup

- install node  
  `brew install node`
- install appium dependencies  
  `npm install -g appium@next`  
  `npm install -g appium-doctor`
- run appium-doctor  
  `appium-doctor`

## Project setup

- clone the repository  
  `git clone `
- install the dependencies  
  `npm install`

## Test configuration

- Test configurations can be changed ( i.e., Android/iOS, Parallel Test, Retries, Device Farms, Reporting etc ) as per needs in the config files in [config](https://github.com/Spaul29/webdriverIO-demo/tree/main/config) folder

## Locator strategy for project

- The locator strategy can be referred from [WebdriverIO docs](https://webdriver.io/docs/selectors.html)
- **accessibilityID's** can be preferred as most of the applications support it and can be used as a common locator for both iOS and android


## Run tests

- To run test locally on android emulator - `npm run wdio:android`
- To run test locally on iOS simulator - `npm run wdio:ios`
- To run test 

