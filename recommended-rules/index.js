'use strict';

const error = 'error';
const off = 'off';
const always = 'always';

module.exports = {
    extends: 'eslint:recommended',
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
        'max-len': [
            error,
            {
                code: 140
            }
        ]
    }
};