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
});