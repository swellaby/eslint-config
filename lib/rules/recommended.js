'use strict';

const eslintRuleSettings = require('../utils').eslintRuleSettings;
const always = 'always';

module.exports = {
    extends: 'eslint:recommended',
    rules: {
        complexity: [
            eslintRuleSettings.error,
            {
                max: 10
            }
        ],
        indent: [
            eslintRuleSettings.error,
            4,
            {
                SwitchCase: 1
            }
        ],
        'linebreak-style': [
            eslintRuleSettings.off
        ],
        'max-len': [
            eslintRuleSettings.error,
            {
                code: 180
            }
        ],
        'max-statements': [
            eslintRuleSettings.error,
            {
                max: 12
            },
            {
                ignoreTopLevelFunctions: false
            }
        ],
        'no-console': [
            eslintRuleSettings.off
        ],
        'no-trailing-spaces': [
            eslintRuleSettings.error
        ],
        quotes: [
            eslintRuleSettings.error,
            'single'
        ],
        'require-yield': [
            eslintRuleSettings.off
        ],
        semi: [
            eslintRuleSettings.error,
            always
        ],
        strict: [
            eslintRuleSettings.error,
            'global'
        ]
    }
};