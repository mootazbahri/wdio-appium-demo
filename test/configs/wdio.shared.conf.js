exports.config = {
  // ==================
  // Specify Test Files
  // ==================
  //
  specs: [],

  // ============
  // Capabilities
  // ============
  //
  capabilities: [],

  // ===================
  // Test Configurations
  // ===================
  //
  logLevel: 'debug',
  bail: 0,
  baseUrl: 'http://localhost',
  waitforTimeout: 15000,
  // A timeout of 5 min
  connectionRetryTimeout: 5 * 60 * 1000,
  connectionRetryCount: 0,
  services: [],
  // Framework you want to run your specs with.
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    // Add a 5 min timeout per test
    timeout: 5 * 60 * 1000,
  },
};
