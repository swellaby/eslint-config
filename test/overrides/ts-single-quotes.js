'use strict';

const assert = require('chai').assert;
const overrideConfig = require('../../lib/overrides/ts-single-quotes');
const testutils = require('../../testutils');

const transpiledJsFiles = [
    'bin/**/*.js',
    'lib/**/*.js',
    'src/**/*.js',
    'tasks/**/*.js',
    'test/**/*.js',
    'tests/**/*.js',
    'dist/**/*js',
    'out/**/*js',
    'publish/**/*js',
    '.dist/**/*js',
    '.out/**/*js',
    '.publish/**/*js',
    '.vsts-publish/**/*js'
];

const expectedFileExclusions = [
    'tasks/**/task-wrapper.js'
];

suite('overrides:ts-single-quotes Suite:', () => {
    test('Should correctly set override of quotes rule to exclude all transpiled js files', () => {
        const override = overrideConfig.overrides[0];
        const quoteRule = override.rules.quotes;
        assert.deepEqual(override.files.length, 13);
        assert.deepEqual(override.files, transpiledJsFiles);
        assert.deepEqual(quoteRule[0], testutils.eslintRuleSettings.off);
        assert.deepEqual(override.excludedFiles, expectedFileExclusions);
    });
});