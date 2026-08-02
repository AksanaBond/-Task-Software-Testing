const path = require('path');

exports.config = {
  //
  // ====================
  // Runner Configuration
  // ====================
  runner: 'local',

  //
  // ==================
  // Specify Test Files
  // ==================
  // Point to the .feature files in the features/ directory
  //
  specs: [
    //path.resolve(__dirname, '../../features/**/*.feature'),
    path.resolve(__dirname, '../../features/Favorite_products.feature'),
    path.resolve(__dirname, '../../features/Sign_in.feature'),
    path.resolve(__dirname, '../../features/Search.feature'),
    path.resolve(__dirname, '../../features/language_change.feature'),
    path.resolve(__dirname, '../../features/Basket.feature'),
    path.resolve(__dirname, '../../features/categories.feature'),
  ],

  //
  // ============
  // Capabilities
  // ============
  maxInstances: 1,

  capabilities: [
    {
      browserName: 'chrome',
      maxInstances: 1,
      'goog:chromeOptions': {
        args: [
          '--window-size=1920,1080',
          '--no-sandbox',
          '--disable-dev-shm-usage',
        ],
      },
    },
  ],

  //
  // ===================
  // Test Configurations
  // ===================
  logLevel: 'error',
  bail: 0,
  baseUrl: 'https://practicesoftwaretesting.com',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  //
  // Framework: Cucumber
  //
  framework: 'cucumber',

  reporters: [
    [
      'spec',
      {
        showPreface: true,
        onlyFailures: true,
      },
    ],
    [
      'allure',
      {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],

  //
  // Cucumber Options
  // See: https://webdriver.io/docs/frameworks#cucumberopts-options
  //
  cucumberOpts: {
    require: [path.resolve(__dirname, '../cucumber/steps/**/*.js')],
    backtrace: false,
    requireModule: [],
    dryRun: false,

    failFast: false,
    snippets: true,
    source: true,
    strict: false,
    tagExpression: '',
    timeout: 120000,
    ignoreUndefinedDefinitions: false,
  },

  //
  // =====
  // Hooks
  // =====
  afterStep: async function (step, scenario, { error, duration, passed }) {
    if (!passed) {
      await browser.takeScreenshot();
      // Pause on failure so you can inspect the browser state.
      // The terminal will show "REPL interface" — press Ctrl+C to continue.
      await browser.debug();
    }
  },
};
