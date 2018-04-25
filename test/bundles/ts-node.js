'use strict';

const assert = require('chai').assert;
const bundle = require('../../lib/bundles/ts-node');

suite('bundles:ts-node Suite:', () => {
    test('Should extend the correct configurations', () => {
        assert.deepEqual(bundle.extends.length, 2);
        assert.isTrue(bundle.extends.includes('./node.js'));
        assert.isTrue(bundle.extends.includes('../overrides/ts-single-quotes.js'));
    });
});