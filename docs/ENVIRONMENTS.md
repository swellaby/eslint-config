# Environment Configurations
This module contains two different [environment configurations][eslint-env-url] for [eslint][eslint-url] (node and browser) that enable eslint globals common in those scenarios. 

These environment configurations are utilized in the [bundles][bundles-doc] that are included in this module and we highly recommend using those bundles in your eslint configs. However, you can consume these environment configurations individually if you'd like.

- [Node Environment Configuration Details](#node-environment)
- [Browser Environment Configuration Details](#browser-environment)

## Node Environment
This module enables the below eslint [env globals][eslint-env-url] that are common in our node targetted codebases:

* `commonjs`
* `es6`
* `jasmine`
* `jest`
* `mocha`
* `node`
* `protractor`

You can consume this environment configuration directly by adding the value: `@swellaby/eslint-config/lib/env/node` to the `extends` key in your [eslint configuration file][eslint-config-files-url]. 

For example:
```json
{
    "extends": [ "@swellaby/eslint-config/lib/env/node" ]
}
```

## Browser Environment
This module enables the below eslint [env globals][eslint-env-url] that are common in our browser/web targetted codebases:

* `browser`
* `es6`
* `jasmine`
* `jest`
* `mocha`
* `protractor`

You can consume this environment configuration directly by adding the value: `@swellaby/eslint-config/lib/env/browser` to the `extends` key in your [eslint configuration file][eslint-config-files-url]. 

For example:
```json
{
    "extends": [ "@swellaby/eslint-config/lib/env/browser" ]
}
```

[Back to Top](#environment-configurations)


[bundles-doc]: ./BUNDLES.md
[eslint-url]: https://eslint.org/
[eslint-env-url]: https://eslint.org/docs/user-guide/configuring#specifying-environments
[eslint-config-files-url]: https://eslint.org/docs/user-guide/configuring#using-configuration-files