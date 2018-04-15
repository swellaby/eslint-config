'use strict';

const assert = require('chai').assert;
const config = require('..');
const helpers = require('../../../helpers');

suite('All rules Suite:', () => {
    test('Should extend the eslint all ruleset', () => {
        assert.deepEqual(config.extends, 'eslint:all');
    });

    test('Should correctly set override max-statements rule to exclude all test files', () => {
        const maxStatementsOverride = config.overrides[0];
        const maxStatementsRule = maxStatementsOverride.rules[helpers.eslintRuleNames.maxStatements];
        assert.deepEqual(maxStatementsOverride.files.length, 8);
        assert.deepEqual(maxStatementsOverride.files, helpers.eslintRuleOverrides.maxStatementsTestFilesOverride.testFiles);
        assert.deepEqual(maxStatementsRule[0], helpers.eslintRuleSettings.disabled);
    });

    test('Should disable array-bracket-newline rule', () => {
        const arrayBracketNewlineRule = config.rules[helpers.eslintRuleNames.arrayBracketNewline];
        assert.deepEqual(arrayBracketNewlineRule.length, 1);
        assert.deepEqual(arrayBracketNewlineRule[0], helpers.eslintRuleSettings.disabled);
    });

    test('Should disable capitalized-comments rule', () => {
        const capitalizedCommentsRule = config.rules[helpers.eslintRuleNames.capitalizedComments];
        assert.deepEqual(capitalizedCommentsRule.length, 1);
        assert.deepEqual(capitalizedCommentsRule[0], helpers.eslintRuleSettings.disabled);
    });

    test('Should correctly set rule for cyclomatic complexity threshold', () => {
        const complexityRule = config.rules.complexity;
        assert.deepEqual(complexityRule.length, 2);
        assert.deepEqual(complexityRule[0], helpers.eslintRuleSettings.error);
        assert.deepEqual(complexityRule[1].max, 10);
    });

    test('Should disable eol-last rule', () => {
        const eolLastRule = config.rules[helpers.eslintRuleNames.eolLast];
        assert.deepEqual(eolLastRule.length, 1);
        assert.deepEqual(eolLastRule[0], helpers.eslintRuleSettings.disabled);
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
        assert.deepEqual(maxLenRule[1].code, 180);
    });

    test('Should set correct max statements rule', () => {
        const maxStatementsRule = config.rules[helpers.eslintRuleNames.maxStatements];
        assert.deepEqual(maxStatementsRule.length, 3);
        assert.deepEqual(maxStatementsRule[0], helpers.eslintRuleSettings.error);
        assert.deepEqual(maxStatementsRule[1].max, 12);
        assert.isFalse(maxStatementsRule[2].ignoreTopLevelFunctions);
    });

    test('Should disable multiline-comment-style rule', () => {
        const multiLineCommentStyleRule = config.rules[helpers.eslintRuleNames.multilineCommentStyle];
        assert.deepEqual(multiLineCommentStyleRule.length, 1);
        assert.deepEqual(multiLineCommentStyleRule[0], helpers.eslintRuleSettings.disabled);
    });

    test('Should disable no-console rule', () => {
        const noConsoleRule = config.rules[helpers.eslintRuleNames.noConsole];
        assert.deepEqual(noConsoleRule.length, 1);
        assert.deepEqual(noConsoleRule[0], helpers.eslintRuleSettings.disabled);
    });

    test('Should disable magic numbers rule', () => {
        const magicNumbersRule = config.rules[helpers.eslintRuleNames.noMagicNumbers];
        assert.deepEqual(magicNumbersRule.length, 1);
        assert.deepEqual(magicNumbersRule[0], helpers.eslintRuleSettings.disabled);
    });

    test('Should set rule to disallow trailing spaces', () => {
        const noTrailingSpacesRule = config.rules[helpers.eslintRuleNames.noTrailingSpaces];
        assert.deepEqual(noTrailingSpacesRule.length, 1);
        assert.deepEqual(noTrailingSpacesRule[0], helpers.eslintRuleSettings.error);
    });

    test('Should disable object-curly-newline rule', () => {
        const objectCurlyNewlineRule = config.rules[helpers.eslintRuleNames.objectCurlyNewline];
        // assert.deepEqual(objectCurlyNewlineRule.length, 1);
        assert.deepEqual(objectCurlyNewlineRule[0], helpers.eslintRuleSettings.disabled);
    });

    test('Should disable one-var rule', () => {
        const oneVarRule = config.rules[helpers.eslintRuleNames.oneVar];
        assert.deepEqual(oneVarRule.length, 1);
        assert.deepEqual(oneVarRule[0], helpers.eslintRuleSettings.disabled);
    });

    test('Should disable padded-blocks rule', () => {
        const paddedBlocksRule = config.rules[helpers.eslintRuleNames.paddedBlocks];
        assert.deepEqual(paddedBlocksRule.length, 1);
        assert.deepEqual(paddedBlocksRule[0], helpers.eslintRuleSettings.disabled);
    });

    test('Should disable prefer-destructuring rule', () => {
        const preferDestructuringRule = config.rules[helpers.eslintRuleNames.preferDestructuring];
        assert.deepEqual(preferDestructuringRule.length, 1);
        assert.deepEqual(preferDestructuringRule[0], helpers.eslintRuleSettings.disabled);
    });

    test('Should disable prefer-template rule', () => {
        const preferTemplateRule = config.rules[helpers.eslintRuleNames.preferTemplate];
        assert.deepEqual(preferTemplateRule.length, 1);
        assert.deepEqual(preferTemplateRule[0], helpers.eslintRuleSettings.disabled);
    });

    test('Should set quote-props to as-needed', () => {
        const quotePropsRule = config.rules[helpers.eslintRuleNames.quoteProps];
        assert.deepEqual(quotePropsRule.length, 3);
        assert.deepEqual(quotePropsRule[0], helpers.eslintRuleSettings.error);
        assert.deepEqual(quotePropsRule[1], helpers.eslintRuleOptions.asNeeded);
        assert.isFalse(quotePropsRule[2].keywords);
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

    test('Should enable sort-keys rule', () => {
        const sortKeysRule = config.rules[helpers.eslintRuleNames.sortKeys];
        assert.deepEqual(sortKeysRule.length, 1);
        assert.deepEqual(sortKeysRule[0], helpers.eslintRuleSettings.error);
    });

    test('Should require global strict mode rule', () => {
        const strictRule = config.rules.strict;
        assert.deepEqual(strictRule.length, 2);
        assert.deepEqual(strictRule[0], helpers.eslintRuleSettings.error);
        assert.deepEqual(strictRule[1], helpers.eslintConfigKeys.global);
    });
});