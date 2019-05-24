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
                'max-lines-per-function': [
                    eslintRuleSettings.off
                ]
            }
        }
    ]
};
