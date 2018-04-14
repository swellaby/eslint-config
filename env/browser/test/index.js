'use strict';

const assert = require('chai').assert;
const config = require('..');

suite('env browser Suite:', () => {
    test('Should not extend any configuration', () => {
        assert.isUndefined(config.extends);
    });

    test('Should not specify any rules configuration', () => {
        assert.isUndefined(config.rules);
    });

    test('Should not specify any configuration overrides', () => {
        assert.isUndefined(config.overrides);
    });

    test('Should not enable commonjs globals', () => {
        assert.isUndefined(config.env.commonjs);
    });

    test('Should not enable node globals', () => {
        assert.isUndefined(config.env.node);
    });

    test('Should enable browser globals', () => {
        assert.isTrue(config.env.browser);
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

    test('Should enable protractor globals', () => {
        assert.isTrue(config.env.protractor);
    });
});