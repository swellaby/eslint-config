'use strict';

const assert = require('chai').assert;
const config = require('../../lib/env/node');

suite('env:node Suite:', () => {
    test('Should not extend any configuration', () => {
        assert.isUndefined(config.extends);
    });

    test('Should not specify any rules configuration', () => {
        assert.isUndefined(config.rules);
    });

    test('Should not specify any configuration overrides', () => {
        assert.isUndefined(config.overrides);
    });

    test('Should not enable browser globals', () => {
        assert.isUndefined(config.env.browser);
    });

    test('Should enable commonjs globals', () => {
        assert.isTrue(config.env.commonjs);
    });

    test('Should enable es6 globals', () => {
        assert.isTrue(config.env.es6);
    });

    test('Should enable jasmine globals', () => {
        assert.isTrue(config.env.jasmine);
    });

    test('Should enable jest globals', () => {
        assert.isTrue(config.env.jest);
    });

    test('Should enable mocha globals', () => {
        assert.isTrue(config.env.mocha);
    });

    test('Should enable node globals', () => {
        assert.isTrue(config.env.node);
    });

    test('Should enable protractor globals', () => {
        assert.isTrue(config.env.protractor);
    });
});