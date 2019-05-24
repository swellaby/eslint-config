'use strict';

const eslintRuleSettings = require('../utils').eslintRuleSettings;

module.exports = {
    extends: 'eslint:all',
    rules: {
        'array-bracket-newline': [
            eslintRuleSettings.off
        ],
        'capitalized-comments': [
            eslintRuleSettings.off
        ],
        complexity: [
            eslintRuleSettings.error,
            {
                max: 10
            }
        ],
        'eol-last': [
            eslintRuleSettings.off
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
        'multiline-comment-style': [
            eslintRuleSettings.off
        ],
        'no-console': [
            eslintRuleSettings.off
        ],
        'no-magic-numbers': [
            eslintRuleSettings.off
        ],
        'no-trailing-spaces': [
            eslintRuleSettings.error
        ],
        'no-unused-vars': [
            eslintRuleSettings.error,
            {
                argsIgnorePattern: '^_'
            }
        ],
        'object-curly-newline': [
            eslintRuleSettings.off,
            'always',
            {
                minProperties: 2
            }
        ],
        'one-var': [
            eslintRuleSettings.off
        ],
        'padded-blocks': [
            eslintRuleSettings.off
        ],
        'prefer-destructuring': [
            eslintRuleSettings.off
        ],
        'prefer-template': [
            eslintRuleSettings.off
        ],
        'quote-props': [
            eslintRuleSettings.error,
            'as-needed',
            {
                keywords: false
            }
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
            'always'
        ],
        'sort-keys': [
            eslintRuleSettings.error
        ],
        strict: [
            eslintRuleSettings.error,
            'global'
        ]
    }
};
