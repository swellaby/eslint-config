# Overrides Configurations
This module also includes certain [eslint][eslint-url] rule overrides so that individual rule configurations can be modified or disabled for specific situations (without having to maintain multiple, directory specific eslint config files). 

These override configurations are utilized in the [bundles][bundles-doc] that are included in this module and we highly recommend using those bundles in your eslint configs. However, you can consume these overrides configurations individually if you'd like.

- [Max Statements Override for Test Files](#max-statements-disabled-for-test-files)
- [Single Quotes Override for TypeScript-transpiled JavaScript files](#single-quotes-disabled-for-transpiled-files)

## Max Statements Disabled for Test Files
The [max-statements rule][eslint-max-statements-rule-url] helps to ensure code readability and quality by flagging any code blocks that containt too many statements. However, the [max-statements rule][eslint-max-statements-rule-url] will also generate false positives in test files when using test frameworks like [mocha][mocha-url] or [jasmine][jasmine-url]. This occurs because using these frameworks involves writing test case functions within containers (typically a `describe` or `suite`) that define their own function scope.

This override will disable the `max-statements` rule in all test files to avoid those false positives. The override uses the below glob patterns to match test files (note that these globs will be resolved relative to location of your [eslint config file][eslint-config-files-url], so we highly recommend putting your [eslint config file][eslint-config-files-url] in the root of your repository):

```
[
    '**/*-tests.js',
    '**/*-test.js',
    '**/*.tests.js',
    '**/*.test.js',
    '**/*-spec.js',
    '**/*.spec.js',
    '**/test/**/*.js',
    '**/tests/**/*.js'
]
```

You can consume this override configuration directly by adding the value: `@swellaby/eslint-config/lib/overrides/test-max-statements` to the `extends` key in your [eslint configuration file][eslint-config-files-url]. 

For example:
```json
{
    "extends": [ "@swellaby/eslint-config/lib/overrides/test-max-statements" ]
}
```

## Single Quotes Disabled for Transpiled Files
We use single quotes (`'`) in all of our source files in both JavaScript and TypeScript files. Accordingly, this module defaults the configuration of the [quotes rule][eslint-quotes-rule-url] to enforce the usage of single quotes in our source JavaScript files and our [tslint config][swellaby-tslint-config-pkg-url] does the same in our TypeScript source files. 

However, the TypeScript transpilation process will always emit the corresponding JavaScript files with double quotes in certain places (for example on `require('..')` statements) regardless of the type of quote used in the TypeScript source file. This generates false positives when running eslint against those emitted `*.js` files when the [quotes rule][eslint-quotes-rule-url] is set to single quotes. 

Accordingly this override will disable the `quotes` rule in all transpiled JavaScript files to avoid those false positives. The override uses the below glob patterns to match test files (note that these globs will be resolved relative to location of your [eslint config file][eslint-config-files-url], so we highly recommend putting your [eslint config file][eslint-config-files-url] in the root of your repository):

```
[
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
]
```

You can consume this override configuration directly by adding the value: `@swellaby/eslint-config/lib/overrides/ts-single-quotes` to the `extends` key in your [eslint configuration file][eslint-config-files-url]. 

For example:
```json
{
    "extends": [ "@swellaby/eslint-config/lib/overrides/ts-single-quotes" ]
}
```

[Back to Top](#overrides-configurations)


[bundles-doc]: ./BUNDLES.md
[eslint-url]: https://eslint.org/
[eslint-config-files-url]: https://eslint.org/docs/user-guide/configuring#using-configuration-files
[eslint-max-statements-rule-url]: https://eslint.org/docs/rules/max-statements
[eslint-quotes-rule-url]: https://eslint.org/docs/rules/quotes
[jasmine-url]: https://jasmine.github.io/
[mocha-url]: https://mochajs.org/
[swellaby-tslint-config-pkg-url]: https://www.npmjs.com/package/@swellaby/tslint-config