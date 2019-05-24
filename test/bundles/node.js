'use strict';

const assert = require('chai').assert;
const bundle = require('../../lib/bundles/node');

suite('bundles:node Suite:', () => {
    test('Should extend the correct configurations', () => {
        assert.deepEqual(bundle.extends.length, 4);
        assert.isTrue(bundle.extends.includes('../env/node.js'));
        assert.isTrue(bundle.extends.includes('../rules/recommended.js'));
        assert.isTrue(bundle.extends.includes('../overrides/test-max-statements.js'));
        assert.isTrue(bundle.extends.includes('../overrides/test-max-lines-per-function.js'));
    });
});
