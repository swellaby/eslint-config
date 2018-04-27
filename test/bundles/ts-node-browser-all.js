'use strict';

const assert = require('chai').assert;
const bundle = require('../../lib/bundles/ts-node-browser-all');

suite('bundles:ts-node-browser-all Suite:', () => {
    test('Should extend the correct configurations', () => {
        assert.deepEqual(bundle.extends.length, 2);
        assert.isTrue(bundle.extends.includes('./ts-node-all.js'));
        assert.isTrue(bundle.extends.includes('../env/browser.js'));
    });
});