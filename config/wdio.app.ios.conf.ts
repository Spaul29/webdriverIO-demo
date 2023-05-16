import { join } from "path";
import { config } from '../config/wdio.shared.conf';

// ============
// Specs
// ============
config.specs = ['../tests/specs/*.spec.ts'];

//
// ======
// Appium
// ======
//
config.services = [[
    'appium',
    {
        // This will use the globally installed version of Appium
        command: 'appium',
        args: {
            // This is needed to tell Appium that we can execute local ADB commands
            // and to automatically download the latest version of ChromeDriver
            relaxedSecurity: true,
        },
    },
]],

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: "iOS",
        maxInstances: 1,
        // For W3C the appium capabilities need to have an extension prefix
        // This is `appium:` for all Appium Capabilities which can be found here
        // http://appium.io/docs/en/writing-running-appium/caps/
        "appium:deviceName": "iPhone 11 Pro",
        "appium:platformVersion": "15.2",
        "appium:orientation": "PORTRAIT",
        "appium:automationName": "XCUITest",
        "appium:app": join(
            process.cwd(),
            "./apps/iOS.Simulator.SauceLabs.Mobile.Sample.app.2.7.1.app"
        ),
        "appium:bundleId":"com.saucelabs.SwagLabsMobileApp",
        "appium:noReset": true
    },
];

exports.config = config;