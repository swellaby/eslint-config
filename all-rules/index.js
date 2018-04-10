'use strict';

const error = 'error';
const off = 'off';
const always = 'always';

module.exports = {
    extends: 'eslint:all',
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
                    off
                ]
            }
        }
    ],
    rules: {
        'array-bracket-newline': [
            off
        ],
        'capitalized-comments': [
            off
        ],
        complexity: [
            error,
            {
                max: 10
            }
        ],
        'eol-last': [
            off
        ],
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
        'max-len': [
            error,
            {
                code: 140
            }
        ],
        'max-statements': [
            error,
            {
                max: 12
            },
            {
                ignoreTopLevelFunctions: false
            }
        ],
        'multiline-comment-style': [
            off
        ],
        'no-console': [
            off
        ],
        'no-magic-numbers': [
            off
        ],
        'no-trailing-spaces': [
            error
        ],
        'object-curly-newline': [
            off,
            always,
            {
                minProperties: 2
            }
        ],
        'one-var': [
            off
        ],
        'padded-blocks': [
            off
        ],
        'prefer-destructuring': [
            off
        ],
        'prefer-template': [
            off
        ],
        'quote-props': [
            error,
            'as-needed',
            {
                keywords: false
            }
        ],
        quotes: [
            error,
            'single'
        ],
        'require-yield': [
            off
        ],
        semi: [
            error,
            always
        ],
        'sort-keys': [
            error
        ],
        strict: [
            error,
            'global'
        ]
    }
};