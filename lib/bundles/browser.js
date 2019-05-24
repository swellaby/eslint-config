'use strict';

module.exports = {
    extends: [
        '../env/browser.js',
        '../rules/recommended.js',
        '../overrides/test-max-statements.js',
        '../overrides/test-max-lines-per-function.js'
    ]
};
