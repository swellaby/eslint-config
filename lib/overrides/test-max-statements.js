'use strict';

const {
    eslintRuleSettings,
    testFiles
} = require('../utils');

module.exports = {
    overrides: [
        {
            files: testFiles,
            rules: {
                'max-statements': [
                    eslintRuleSettings.off
                ]
            }
        }
    ]
};
