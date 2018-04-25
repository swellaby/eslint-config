'use strict';

const assert = require('chai').assert;
const overrideConfig = require('../../lib/overrides/test-max-statements');
const testutils = require('../../testutils');

suite('overrides:test-max-statements Suite:', () => {
    test('Should correctly set override max-statements rule to exclude all test files', () => {
        const maxStatementsOverride = overrideConfig.overrides[0];
        const maxStatementsRule = maxStatementsOverride.rules[testutils.eslintRuleNames.maxStatements];
        assert.deepEqual(maxStatementsOverride.files.length, 8);
        assert.deepEqual(maxStatementsOverride.files, testutils.eslintRuleOverrides.maxStatementsTestFilesOverride.testFiles);
        assert.deepEqual(maxStatementsRule[0], testutils.eslintRuleSettings.off);
    });
});