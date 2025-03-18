const { config } = require('./wdio.shared.conf');

// =====================
// Sauce specific config
// =====================
config.user = process.env.USERNAME;
config.key = process.env.ACCESS_KEY;
config.hostname = process.env.APPIUM_HOSTNAME;
config.port = 443;

// ========
// Services
// ========

config.services = (config.services || []).concat('sauce');

exports.config = config;
