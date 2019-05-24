'use strict';

module.exports = {
    extends: [
        '../env/browser.js',
        '../rules/all.js',
        '../overrides/test-max-statements.js',
        '../overrides/test-max-lines-per-function.js'
    ]
};
