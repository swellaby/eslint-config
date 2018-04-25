'use strict';

const eslintRuleSettings = require('../utils').eslintRuleSettings;

module.exports = {
    overrides: [
        {
            files: [
                '**/*-tests.js',
                '**/*-test.js',
                '**/*.tests.js',
                '**/*.test.js',
                '**/*-spec.js',
                '**/*.spec.js',
                '**/test/**/*.js',
                '**/tests/**/*.js'
            ],
            rules: {
                'max-statements': [
                    eslintRuleSettings.off
                ]
            }
        }
    ]
};