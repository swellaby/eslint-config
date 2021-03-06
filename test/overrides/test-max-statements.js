'use strict';

const assert = require('chai').assert;
const overrideConfig = require('../../lib/overrides/test-max-statements');
const utils = require('../../lib/utils');
const {eslintRuleNames, eslintRuleSettings} = require('../../testutils');


suite('overrides:test-max-statements Suite:', () => {
    test('Should correctly set override max-statements rule to exclude all test files', () => {
        const override = overrideConfig.overrides[0];
        const rule = override.rules[eslintRuleNames.maxStatements];
        assert.deepEqual(override.files, utils.testFiles);
        assert.deepEqual(rule[0], eslintRuleSettings.off);
    });
});
