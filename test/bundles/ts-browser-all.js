'use strict';

const assert = require('chai').assert;
const bundle = require('../../lib/bundles/ts-browser-all');

suite('bundles:ts-browser-all Suite:', () => {
    test('Should extend the correct configurations', () => {
        assert.deepEqual(bundle.extends.length, 2);
        assert.isTrue(bundle.extends.includes('./browser-all.js'));
        assert.isTrue(bundle.extends.includes('../overrides/ts-single-quotes.js'));
    });
});