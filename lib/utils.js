'use strict';

module.exports = {
    eslintRuleSettings: {
        error: 'error',
        off: 'off',
        warn: 'warn'
    },
    testFiles: [
        '**/*-tests.js',
        '**/*-test.js',
        '**/*.tests.js',
        '**/*.test.js',
        '**/*-spec.js',
        '**/*.spec.js',
        '**/test/**/*.js',
        '**/tests/**/*.js'
    ]
};
