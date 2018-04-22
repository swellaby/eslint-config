# eslint-config-all
Our configuration for [eslint][eslint-url] extending the [eslint:all ruleset][eslint-all-rules-url] of [eslint][eslint-url]. Geared for our specific needs, but feel free to use it if it helps you (you can always override any rule in your eslint config file)!  
[![npmjs Badge][npmjs-version-badge]][npmjs-pkg-url] [![license Badge][license-badge]][license-url]

## Installation
Install the eslint config as a dev dependency:
```sh
npm i @swellaby/eslint-config-all --save-dev
```

## Usage
Add an `extends` key to your [eslint config file][eslint-config-files-url] and in the value specify an array that includes `@swellaby/eslint-config-all`:

For example if you have your eslint config in a json format:
```json
{
    ...
    "extends": [ "@swellaby/eslint-config-all" ],
    ...
}
``` 

## Configuration
This module specifies the below configuratin that extends the full [eslint:all][eslint-all-rules-url] rule configuration. Of note: we add an override for files that contain tests, specifically to disable the `max-statements` rule. This is because the rule will flag multiple test cases within test containers, as a false positive. 

```json
{
    "extends": "eslint:all",
    "overrides": [
        {
            "files": [
                "**/*-tests.js",
                "**/*-test.js",
                "**/*.tests.js",
                "**/*.test.js",
                "**/*-spec.js",
                "**/*.spec.js",
                "**/test/**/*.js",
                "**/tests/**/*.js"
            ],
            "rules": {
                "max-statements": [
                    "off"
                ]
            }
        }
    ],
    "rules": {
        "array-bracket-newline": [
            "off"
        ],
        "capitalized-comments": [
            "off"
        ],
        "complexity": [
            "error",
            {
                "max": 10
            }
        ],
        "eol-last": [
            "off"
        ],
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "linebreak-style": [
            "off"
        ],
        "max-len": [
            "error",
            {
                "code": 180
            }
        ],
        "max-statements": [
            "error",
            {
                "max": 12
            },
            {
                "ignoreTopLevelFunctions": false
            }
        ],
        "multiline-comment-style": [
            "off"
        ],
        "no-console": [
            "off"
        ],
        "no-magic-numbers": [
            "off"
        ],
        "no-trailing-spaces": [
            "error"
        ],
        "object-curly-newline": [
            "off",
            "always",
            {
                "minProperties": 2
            }
        ],
        "one-var": [
            "off"
        ],
        "padded-blocks": [
            "off"
        ],
        "prefer-destructuring": [
            "off"
        ],
        "prefer-template": [
            "off"
        ],
        "quote-props": [
            "error",
            "as-needed",
            {
                "keywords": false
            }
        ],
        "quotes": [
            "error",
            "single"
        ],
        "require-yield": [
            "off"
        ],
        "semi": [
            "error",
            "always"
        ],
        "sort-keys": [
            "error"
        ],
        "strict": [
            "error",
            "global"
        ]
    }
}
```

## License
MIT - see license details [here][license-url]

[npmjs-version-badge]: https://img.shields.io/npm/v/@swellaby/eslint-config-all.svg
[npmjs-pkg-url]: https://www.npmjs.com/package/@swellaby/eslint-config-all
[eslint-url]: https://eslint.org/
[eslint-all-rules-url]: https://eslint.org/docs/user-guide/configuring#using-eslintall
[eslint-config-files-url]: https://eslint.org/docs/user-guide/configuring#using-configuration-files
[license-url]: https://github.com/swellaby/eslint-config/blob/master/LICENSE
[license-badge]: https://img.shields.io/github/license/swellaby/eslint-config.svg