'use strict';

const assert = require('chai').assert;
const bundle = require('../../lib/bundles/browser-all');

suite('bundles:browser-all Suite:', () => {
    test('Should extend the correct configurations', () => {
        assert.deepEqual(bundle.extends.length, 4);
        assert.isTrue(bundle.extends.includes('../env/browser.js'));
        assert.isTrue(bundle.extends.includes('../rules/all.js'));
        assert.isTrue(bundle.extends.includes('../overrides/test-max-statements.js'));
        assert.isTrue(bundle.extends.includes('../overrides/test-max-lines-per-function.js'));
    });
});
