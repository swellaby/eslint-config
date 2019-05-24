'use strict';

const assert = require('chai').assert;
const overrideConfig = require('../../lib/overrides/test-max-lines-per-function');
const utils = require('../../lib/utils');
const {eslintRuleNames, eslintRuleSettings} = require('../../testutils');

suite('overrides:test-max-lines-per-function Suite:', () => {
    test('Should correctly set override max-lines-per-function rule to exclude all test files', () => {
        const override = overrideConfig.overrides[0];
        const rule = override.rules[eslintRuleNames.maxLinesPerFunction];
        assert.deepEqual(override.files, utils.testFiles);
        assert.deepEqual(rule[0], eslintRuleSettings.off);
    });
});
