'use strict';

const assert = require('chai').assert;
const config = require('..');

suite('typescript all rules Suite:', () => {
    test('Should extend the eslint all ruleset', () => {
        assert.deepEqual(config.extends, 'eslint:all');
    });
});