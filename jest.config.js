const path = require('path');

module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/HomeWork15/tests/**/*.test.js'],
  reporters: [
    'default',
    [
      'jest-html-reporter',
      {
        pageTitle: 'Test Report',
        outputPath: path.join(__dirname, 'reports', 'test-report.html'),
        includeFailureMsg: true,
        includeConsoleLog: true,
      },
    ],
  ],
  collectCoverage: true,
  coverageDirectory: 'reports/coverage',
};
