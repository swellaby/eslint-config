'use strict';

module.exports = {
    eslintConfigKeys: {
        global: 'global',
        single: 'single'
    },
    eslintRuleNames: {
        arrayBracketNewline: 'array-bracket-newline',
        capitalizedComments: 'capitalized-comments',
        eolLast: 'eol-last',
        linebreakStlye: 'linebreak-style',
        maxLen: 'max-len',
        maxLinesPerFunction: 'max-lines-per-function',
        maxStatements: 'max-statements',
        multilineCommentStyle: 'multiline-comment-style',
        noConsole: 'no-console',
        noMagicNumbers: 'no-magic-numbers',
        noTrailingSpaces: 'no-trailing-spaces',
        noUnusedVars: 'no-unused-vars',
        objectCurlyNewline: 'object-curly-newline',
        oneVar: 'one-var',
        paddedBlocks: 'padded-blocks',
        preferDestructuring: 'prefer-destructuring',
        preferTemplate: 'prefer-template',
        quoteProps: 'quote-props',
        requireYield: 'require-yield',
        sortKeys: 'sort-keys'
    },
    eslintRuleOptions: {
        always: 'always',
        asNeeded: 'as-needed',
        consistent: 'consistent',
        consistentAsNeeded: 'consistent-as-needed',
        never: 'never'
    },
    eslintRuleOverrides: {
        maxStatementsTestFilesOverride: {
            testFiles: [
                '**/*-tests.js',
                '**/*-test.js',
                '**/*.tests.js',
                '**/*.test.js',
                '**/*-spec.js',
                '**/*.spec.js',
                '**/test/**/*.js',
                '**/tests/**/*.js'
            ]
        }
    },
    eslintRuleSettings: {
        error: 'error',
        off: 'off',
        warn: 'warn'
    }
};
