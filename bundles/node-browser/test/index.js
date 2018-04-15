'use strict';

const assert = require('chai').assert;
const config = require('..');

suite('node bundle Suite:', () => {
    test('Should extend the the correct swellaby rule and environment configs', () => {
        assert.deepEqual(config.extends.length, 2);
        assert.isTrue(config.extends.includes('@swellaby/eslint-config-env-node'));
        assert.isTrue(config.extends.includes('@swellaby/eslint-config-recommended'));
    });

    test('Should not include overrides config', () => {
        assert.isUndefined(config.overrides);
    });

    test('Should not include any explicit rule settings', () => {
        assert.isUndefined(config.rules);
    });
});