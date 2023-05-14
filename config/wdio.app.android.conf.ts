import { join } from 'path';
import { config } from '../config/wdio.shared.conf';

// ============
// Specs
// ============
config.specs = [
    '../tests/specs/OrderProduct.spec.ts',
];

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
config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: 'Android',
        maxInstances: 1,
        'appium:deviceName': 'Pixel_3_API_31',
        'appium:platformVersion': '12.0',
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'UiAutomator2',
        // The path to the app
        'appium:app': join(process.cwd(), './apps/Android.SauceLabs.Mobile.Sample.app.2.7.1.apk'),
        "appium:appWaitActivity": 'com.swaglabsmobileapp.MainActivity',
        'appium:noReset': false,
        'appium:newCommandTimeout': 240,
    },
];

exports.config= config;