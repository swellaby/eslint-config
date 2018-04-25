'use strict';

const eslintRuleSettings = require('../utils').eslintRuleSettings;

module.exports = {
    overrides: [
        {
            excludedFiles: [
                'tasks/**/task-wrapper.js'
            ],
            files: [
                'bin/**/*.js',
                'lib/**/*.js',
                'src/**/*.js',
                'tasks/**/*.js',
                'test/**/*.js',
                'tests/**/*.js',
                'dist/**/*js',
                'out/**/*js',
                'publish/**/*js',
                '.dist/**/*js',
                '.out/**/*js',
                '.publish/**/*js',
                '.vsts-publish/**/*js'
            ],
            rules: {
                quotes: [
                    eslintRuleSettings.off
                ]
            }
        }
    ]
};