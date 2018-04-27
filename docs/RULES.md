# Rule Configurations
This module contains two different [eslint][eslint-url] rule configurations: one that extends the [eslint:recommended][eslint-recommended-rules-url] ruleset, and another that extends the broader [eslint:all][eslint-all-rules-url] ruleset. 

These rule configurations are utilized in the [bundles][bundles-doc] that are included in this module and we highly recommend using those bundles in your eslint configs. However, you can consume these rule configurations individually if you'd like.

- [Recommended Rules Configuration Details](#recommended-configuration)
- [All Rules Configuration Details](#all-configuration)

## Recommended Configuration
This is our default rule configuration and the one we recommend for most scenarios.  

You can consume this rule configuration directly by adding the value: `@swellaby/eslint-config/lib/rules/recommended` to the `extends` key in your [eslint configuration file][eslint-config-files-url]. 

For example:
```json
{
    "extends": [ "@swellaby/eslint-config/lib/rules/recommended" ]
}
```
This defines the below eslint rules:
```json
{
    "extends": "eslint:recommended",
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

## All Configuration
This is our more complex rule configuration and should be used in repos where you want a stricter enforcement of your code.  

You can consume this rule configuration directly by adding the value: `@swellaby/eslint-config/lib/rules/all` to the `extends` key in your [eslint configuration file][eslint-config-files-url]. 

For example:
```json
{
    "extends": [ "@swellaby/eslint-config/lib/rules/all" ]
}
```

```json
{
    "extends": "eslint:all",
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

[Back to Top](#rule-configurations)

[bundles-doc]: ./BUNDLES.md
[eslint-url]: https://eslint.org/
[eslint-recommended-rules-url]: https://eslint.org/docs/user-guide/configuring#using-eslintrecommended
[eslint-all-rules-url]: https://eslint.org/docs/user-guide/configuring#using-eslintall
[eslint-config-files-url]: https://eslint.org/docs/user-guide/configuring#using-configuration-files