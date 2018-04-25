'use strict';

const assert = require('chai').assert;
const bundle = require('../../lib/bundles/ts-browser');

suite('bundles:ts-browser Suite:', () => {
    test('Should extend the correct configurations', () => {
        assert.deepEqual(bundle.extends.length, 2);
        assert.isTrue(bundle.extends.includes('./browser.js'));
        assert.isTrue(bundle.extends.includes('../overrides/ts-single-quotes.js'));
    });
});