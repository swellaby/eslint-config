'use strict';

module.exports = {
    extends: [
        '../env/node.js',
        '../rules/recommended.js',
        '../overrides/test-max-statements.js',
        '../overrides/test-max-lines-per-function.js'
    ]
};
