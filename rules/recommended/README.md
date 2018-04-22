# eslint-config-recommended
Our configuration for [eslint][eslint-url] rules extending the [eslint:recommended ruleset][eslint-recommended-rules-url] of [eslint][eslint-url]. Geared for our specific needs, but feel free to use it if it helps for you (you can always override any rule in your eslint config file)!  
[![npmjs Badge][npmjs-version-badge]][npmjs-pkg-url] [![license Badge][license-badge]][license-url]

## Installation
Install the eslint config as a dev dependency:
```sh
npm i @swellaby/eslint-config-recommended --save-dev
```

## Usage
Add an `extends` key to your [eslint config file][eslint-config-files-url] and in the value specify an array that includes `@swellaby/eslint-config-recommended`:

For example if you have your eslint config in a json file:
```json
{
    "extends": [ "@swellaby/eslint-config-recommended" ]
}
``` 

## Configuration
This module specifies the below configuratin that extends the full [eslint:recommended][eslint-recommended-rules-url] rule configuration. Of note: we add an override for files that contain tests, specifically to disable the `max-statement` rule. This is because the rule will flag multiple test cases within test containers, as a false positive. 

```json
{
    "extends": "eslint:recommended",
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
        "complexity": [
            "error",
            {
                "max": 10
            }
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
        "no-console": [
            "off"
        ],
        "no-trailing-spaces": [
            "error"
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
        "strict": [
            "error",
            "global"
        ]
    }
}
```

## License
MIT - see license details [here][license-url]

[npmjs-version-badge]: https://img.shields.io/npm/v/@swellaby/eslint-config-recommended.svg
[npmjs-pkg-url]: https://www.npmjs.com/package/@swellaby/eslint-config-recommended
[eslint-url]: https://eslint.org/
[eslint-recommended-rules-url]: https://eslint.org/docs/user-guide/configuring#using-eslintrecommended
[eslint-config-files-url]: https://eslint.org/docs/user-guide/configuring#using-configuration-files
[license-url]: https://github.com/swellaby/eslint-config/blob/master/LICENSE
[license-badge]: https://img.shields.io/github/license/swellaby/eslint-config.svg