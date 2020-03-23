// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
const { config } = require('./protractor.conf');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  ...config,
  capabilities: {
    chromeOptions: {
      args: ['--headless']
    },
    browserName: 'chrome'
  }
};