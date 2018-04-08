'use strict';

const error = 'error';
const off = 'off';
const always = 'always';

module.exports = {
    extends: 'eslint:all',
    rules: {
        indent: [
            error,
            4,
            {
                SwitchCase: 1
            }
        ],
        'linebreak-style': [
            off
        ],
        quotes: [
            error,
            'single'
        ],
        semi: [
            error,
            always
        ],
        'no-console': [
            off
        ],
        'max-statements': [
            error,
            {
                max: 12
            },
            {
                ignoreTopLevelFunctions: true
            }
        ],
        'require-yield': [
            off
        ],
        strict: [
            error,
            'global'
        ],
        'no-trailing-spaces': [
            error
        ],
        complexity: [
            error,
            {
                max: 10
            }
        ],
        'no-magic-numbers': [
            off
        ],
        'quote-props': [
            2,
            'as-needed',
            {
                keywords: false
            }
        ],
        'sort-keys': [
            off
        ],
        'array-bracket-newline': [
            off
        ],
        'object-curly-newline': [
            off,
            always,
            {
                minProperties: 2
            }
        ],
        'eol-last': [
            off
        ],
        'padded-blocks': [
            off
        ],
        'max-len': [
            error,
            {
                code: 140
            }
        ],
        'one-var': [
            off
        ],
        'prefer-destructuring': [
            off
        ],
        'multiline-comment-style': [
            off
        ],
        'capitalized-comments': [
            off
        ]
    }
};