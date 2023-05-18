require('dotenv').config()
import { config } from '../config/wdio.shared.conf';

// ============
// Browserstack credentials
// ============
config.user = process.env.BROWSERSTACK_USERNAME;
config.key = process.env.BROWSERSTACK_ACCESS_KEY;

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
config.services =  ['browserstack'];

// ============
// Capabilities
// ============
config.capabilities = [
    {
        platformName: 'Android',
        maxInstances: 1,
        'appium:deviceName': 'Samsung Galaxy S23 Ultra',
        'appium:platformVersion': '13.0',
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'UiAutomator2',
        // The path to the app
        'appium:app': 'bs://fac5033e837a1d3500e0a1fd975eee66055eaa15',
    },
];

exports.config= config;