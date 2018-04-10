'use strict';

const error = 'error';
const off = 'off';
const always = 'always';

module.exports = {
    extends: 'eslint:recommended',
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
        complexity: [
            error,
            {
                max: 10
            }
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
        'no-console': [
            off
        ],
        'no-trailing-spaces': [
            error
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
        strict: [
            error,
            'global'
        ]
    }
};