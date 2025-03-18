const { config } = require('./wdio.shared.sauce.conf');
const {IPA_SL_FAKE_COUNTER_APP} = require("../../apps/apps");

const automationName = process.env.IOS_SESSION === 'true'
      ? 'AxeXcUiTest'
      : 'AxeUiAutomator2';

const testName = `Appium appium2-deque-accessibility ${automationName}`;

const capsPerPlatform = process.env.IOS_SESSION === 'true'
    ? {
      platformName: 'iOS',
      'appium:deviceName':  'iPhone.*',
      'appium:app': `storage:filename=${IPA_SL_FAKE_COUNTER_APP}`,
      'appium:platformVersion': '^1(7|8).*$',
      'sauce:options': {
        name: testName,
        resigningEnabled: true,
        appiumVersion: "appium2-deque-accessibility",
      },
    }
    : {
      platformName: 'Android',
      'appium:deviceName': process.env.DEVICE_NAME || 'Google Pixel.*',
      // 'appium:app': `storage:filename=${APK_SL_FAKE_COUNTER_APP}`, // Add your app here
      'appium:platformVersion': '1[0-9]',
      'sauce:options': {
        name: testName,
        appiumVersion: "appium2-deque-accessibility",
      },
    };

config.capabilities = [
  {
    'appium:automationName': automationName,
    'appium:newCommandTimeout': 240,
    'appium:autoAcceptAlerts': true,
    ...capsPerPlatform,
  },
];

// =============================================
// Max instances of the same device in the cloud
// =============================================
config.maxInstances = 1;

config.specs = ['test/specs/deque.accessibility.spec.js'];

exports.config = config;
