'use strict';

const assert = require('chai').assert;
const config = require('..');
const helpers = require('../../helpers');

suite('Recommended rules Suite:', () => {
    test('Should extend the eslint recommended ruleset', () => {
        assert.deepEqual(config.extends, 'eslint:recommended');
    });

    test('Should correctly set override max-statements rule to exclude all test files', () => {
        const maxStatementsOverride = config.overrides[0];
        const maxStatementsRule = maxStatementsOverride.rules[helpers.eslintRuleNames.maxStatements];
        assert.deepEqual(maxStatementsOverride.files.length, 8);
        assert.deepEqual(maxStatementsOverride.files, helpers.eslintRuleOverrides.maxStatementsTestFilesOverride.testFiles);
        assert.deepEqual(maxStatementsRule[0], helpers.eslintRuleSettings.disabled);
    });

    test('Should correctly set rule for cyclomatic complexity threshold', () => {
        const complexityRule = config.rules.complexity;
        assert.deepEqual(complexityRule.length, 2);
        assert.deepEqual(complexityRule[0], helpers.eslintRuleSettings.error);
        assert.deepEqual(complexityRule[1].max, 10);
    });

    test('Should set correct indent rule', () => {
        const indentRule = config.rules.indent;
        assert.deepEqual(indentRule.length, 3);
        assert.deepEqual(indentRule[0], helpers.eslintRuleSettings.error);
        assert.deepEqual(indentRule[1], 4);
        assert.deepEqual(indentRule[2].SwitchCase, 1);
    });

    test('Should disable linebreak-style rule', () => {
        const linebreakStyleRule = config.rules[helpers.eslintRuleNames.linebreakStlye];
        assert.deepEqual(linebreakStyleRule.length, 1);
        assert.deepEqual(linebreakStyleRule[0], helpers.eslintRuleSettings.disabled);
    });

    test('Should correctly set max-len rule', () => {
        const maxLenRule = config.rules[helpers.eslintRuleNames.maxLen];
        assert.deepEqual(maxLenRule.length, 2);
        assert.deepEqual(maxLenRule[0], helpers.eslintRuleSettings.error);
        assert.deepEqual(maxLenRule[1].code, 140);
    });

    test('Should set correct max statements rule', () => {
        const maxStatementsRule = config.rules[helpers.eslintRuleNames.maxStatements];
        assert.deepEqual(maxStatementsRule.length, 3);
        assert.deepEqual(maxStatementsRule[0], helpers.eslintRuleSettings.error);
        assert.deepEqual(maxStatementsRule[1].max, 12);
        assert.isFalse(maxStatementsRule[2].ignoreTopLevelFunctions);
    });

    test('Should disable no-console rule', () => {
        const noConsoleRule = config.rules[helpers.eslintRuleNames.noConsole];
        assert.deepEqual(noConsoleRule.length, 1);
        assert.deepEqual(noConsoleRule[0], helpers.eslintRuleSettings.disabled);
    });

    test('Should set rule to disallow trailing spaces', () => {
        const noTrailingSpacesRule = config.rules[helpers.eslintRuleNames.noTrailingSpaces];
        assert.deepEqual(noTrailingSpacesRule.length, 1);
        assert.deepEqual(noTrailingSpacesRule[0], helpers.eslintRuleSettings.error);
    });

    test('Should set quotes rule to single quote', () => {
        const quotesRule = config.rules.quotes;
        assert.deepEqual(quotesRule.length, 2);
        assert.deepEqual(quotesRule[0], helpers.eslintRuleSettings.error);
        assert.deepEqual(quotesRule[1], helpers.eslintConfigKeys.single);
    });

    test('Should disable require-yield rule', () => {
        const requireYieldRule = config.rules[helpers.eslintRuleNames.requireYield];
        assert.deepEqual(requireYieldRule.length, 1);
        assert.deepEqual(requireYieldRule[0], helpers.eslintRuleSettings.disabled);
    });

    test('Should set config rule to always require semicolons', () => {
        const semiRule = config.rules.semi;
        assert.deepEqual(semiRule.length, 2);
        assert.deepEqual(semiRule[0], helpers.eslintRuleSettings.error);
        assert.deepEqual(semiRule[1], helpers.eslintRuleOptions.always);
    });

    test('Should require global strict mode rule', () => {
        const strictRule = config.rules.strict;
        assert.deepEqual(strictRule.length, 2);
        assert.deepEqual(strictRule[0], helpers.eslintRuleSettings.error);
        assert.deepEqual(strictRule[1], helpers.eslintConfigKeys.global);
    });
});