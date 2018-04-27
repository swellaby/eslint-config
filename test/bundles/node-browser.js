'use strict';

const assert = require('chai').assert;
const bundle = require('../../lib/bundles/node-browser');

suite('bundles:node-browser Suite:', () => {
    test('Should extend the correct configurations', () => {
        assert.deepEqual(bundle.extends.length, 2);
        assert.isTrue(bundle.extends.includes('../env/browser.js'));
        assert.isTrue(bundle.extends.includes('./node.js'));
    });
});