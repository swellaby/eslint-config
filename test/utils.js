/* eslint-disable function-call-argument-newline */
'use strict';

const assert = require('chai').assert;
const utils = require('../lib/utils');

suite('utils Suite:', () => {
    test('Should correctly define eslint rule setting strings', () => {
        const eslintRuleSettings = utils.eslintRuleSettings;
        assert.deepEqual(eslintRuleSettings.off, 'off');
        assert.deepEqual(eslintRuleSettings.error, 'error');
        assert.deepEqual(eslintRuleSettings.warn, 'warn');
    });

    test('Should correctly define test files', () => {
        const testFiles = utils.testFiles;
        assert.deepEqual(testFiles.length, 8);
        assert.isTrue(testFiles.includes('**/*-tests.js'));
        assert.isTrue(testFiles.includes('**/*-test.js'));
        assert.isTrue(testFiles.includes('**/*.tests.js'));
        assert.isTrue(testFiles.includes('**/*.test.js'));
        assert.isTrue(testFiles.includes('**/*-spec.js'));
        assert.isTrue(testFiles.includes('**/*.spec.js'));
        assert.isTrue(testFiles.includes('**/test/**/*.js'));
        assert.isTrue(testFiles.includes('**/tests/**/*.js'));
    });
});
