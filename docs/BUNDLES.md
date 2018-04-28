# eslint Configuration Bundles
This module contains several different configurations for [eslint][eslint-url]. These bundles in turn package together specific pairings of our eslint configuration for eslint [rules][rules-doc], [environments][environments-doc], and [rule overrides][overrides-doc] to provide you with a singular, complete eslint configuration for a variety of types of codebase scenarios. 

We highly recommend that you use one of the provided bundles when utilizing this module, but you can optionally use any combination our underlying [rule configurations][rules-doc], [environment configurations][environments-doc], and/or [rule override configurations][overrides-doc] if you'd like.

The below table summarizes all of the various [eslint][eslint-url] configuration bundles that are included in this module, and the value listed for `Consumption Path` for the bundle is what you'd add to the value of your [eslint config file][eslint-config-files-url] `extends` key to utilize that configuration. Each configuration bundle has a partner bundle (has a `ts-` prefix in the bundle name) that is geared for run the same eslint configuration, but in a repo that contains TypeScript source.

| Bundle | Summary | Consumption Path |
|-------------|-------------|----------|
| [node][node-section] | Our primary eslint config for node.js targetted codebases which utilizes our configuration of the eslint:recommended ruleset. Should be the default config option for node.js repos. | `@swellaby/eslint-config` |  
| [ts-node][ts-node-section] | Same as above, but use when your source code is TypeScript and eslint is primarily analyzing transpiled JavaScript. Should be the default config option for node.js targetted repos with TypeScript source. | `@swellaby/eslint-config/lib/bundles/ts-node` |  
| [browser][browser-section] | Our primary eslint config lib for browser/web targetted codebases which utilizes our configuration of the eslint:recommended ruleset. Should be the default config option for browser/web repos. | `@swellaby/eslint-config/lib/bundles/browser` | 
| [ts-browser][ts-browser-section] | Same as above, but use when your source code is TypeScript and eslint is primarily analyzing transpiled JavaScript. Should be the default config option for browser/web repos with TypeScript source. | `@swellaby/eslint-config/lib/bundles/ts-browser` | 
| [node-browser][node-browser-section] | Our eslint config for codebases that have a mix of code targetted *both* for node.js as well as browser/web. Utilizes our configuration of the eslint:recommended ruleset. | `@swellaby/eslint-config/lib/bundles/node-browser` | 
| [ts-node-browser][ts-node-browser-section] | Same as above, but use when your source code is TypeScript and eslint is primarily analyzing transpiled JavaScript. Utilizes our configuration of the eslint:recommended ruleset. Use with codebases that have a mix of code targetted *both* for node.js as well as browser/web with TypeScript source | `@swellaby/eslint-config/lib/bundles/ts-node-browser` | 
| [node-all][node-all-section] | A more complex eslint config for node.js codebases, utilizing the eslint:all ruleset. Use this config option for node.js repos where you want to enforce a stricter set of linting rules. | `@swellaby/eslint-config/lib/bundles/node-all` |
| [ts-node-all][ts-node-all-section] | Same as above, but use when your source code is TypeScript and eslint is primarily analyzing transpiled JavaScript. Use this config option for node.js targetted repos with TypeScript source where you want to enforce a stricter set of linting rules. | `@swellaby/eslint-config/lib/bundles/ts-node-all` |
| [browser-all][browser-all-section] | A more complex eslint config for browser/web targetted codebases, utilizing the eslint:all ruleset. Use this config option for browser/web repos where you want to enforce a stricter set of linting rules. | `@swellaby/eslint-config/lib/bundles/browser-all` |
| [ts-browser-all][ts-browser-all-section] | Same as above, but use when your source code is TypeScript and eslint is primarily analyzing transpiled JavaScript. Use this config option for browser/web targetted repos with TypeScript source where you want to enforce a stricter set of linting rules. | `@swellaby/eslint-config/lib/bundles/ts-browser-all` |
| [node-browser-all][node-browser-all-section] | A more complex eslint config for codebases that have a mix of code targetted *both* for node.js as well as browser/web. Utilizes our configuration of the eslint:all ruleset so use it when you want to enforce a stricter set of linting rules | `@swellaby/eslint-config/lib/bundles/node-browser-all` |
| [ts-node-browser-all][ts-node-browser-all-section] | Same as above, but use when your source code is TypeScript and eslint is primarily analyzing transpiled JavaScript. Use this config option for repos targetting both node and browser/web with TypeScript source where you want to enforce a stricter set of linting rules. | `@swellaby/eslint-config/lib/bundles/ts-node-browser-all` |  

## node Bundle
This is our default configuration for node.js targetted repos, and it is also the default configuration exported by the module. 

You can consume this eslint configuration by adding the value: `@swellaby/eslint-config` to the `extends` key in your [eslint configuration file][eslint-config-files-url]. For example:
```json
{
    "extends": [ "@swellaby/eslint-config" ]
}
```

This bundle utilizes:
- Our [recommended rules][recommend-rules-doc-url] configuration
- Our [node env][node-env-doc-url] configuration
- Our [max-statement override for test files][max-statement-override-doc-url] configuration

[Back to Top][top-section]

## ts-node Bundle
This is the same configuration as our default [node][node-section] bundle, except that it is designed to be used when the repo contains source TypeScript code and eslint is linting transpiled/emitted JavaScript files.

You can consume this eslint configuration by adding the value: `@swellaby/eslint-config/lib/bundles/ts-node` to the `extends` key in your [eslint configuration file][eslint-config-files-url]. For example:
```json
{
    "extends": [ "@swellaby/eslint-config/lib/bundles/ts-node" ]
}
```

This bundle utilizes:
- Our [recommended rules][recommend-rules-doc-url] configuration
- Our [node env][node-env-doc-url] configuration
- Our [max-statement override for test files][max-statement-override-doc-url] configuration
- Our [single quotes override for transpiled js files][quotes-override-doc-url] configuration

[Back to Top][top-section]

## browser Bundle
This is our default configuration for browser/web targetted repos. 

You can consume this eslint configuration by adding the value: `@swellaby/eslint-config/lib/bundles/browser` to the `extends` key in your [eslint configuration file][eslint-config-files-url]. For example:
```json
{
    "extends": [ "@swellaby/eslint-config/lib/bundles/browser" ]
}
```

This bundle utilizes:
- Our [recommended rules][recommend-rules-doc-url] configuration
- Our [browser env][browser-env-doc-url] configuration
- Our [max-statement override for test files][max-statement-override-doc-url] configuration

[Back to Top][top-section]

## ts-browser Bundle
This is the same configuration as our default [browser][browser-section] bundle, except that it is designed to be used when the repo contains source TypeScript code and eslint is linting transpiled/emitted JavaScript files.

You can consume this eslint configuration by adding the value: `@swellaby/eslint-config/lib/bundles/ts-browser` to the `extends` key in your [eslint configuration file][eslint-config-files-url]. For example:
```json
{
    "extends": [ "@swellaby/eslint-config/lib/bundles/ts-browser" ]
}
```

This bundle utilizes:
- Our [recommended rules][recommend-rules-doc-url] configuration
- Our [browser env][browser-env-doc-url] configuration
- Our [max-statement override for test files][max-statement-override-doc-url] configuration
- Our [single quotes override for transpiled js files][quotes-override-doc-url] configuration

[Back to Top][top-section]

## node-browser Bundle
A combintation of our [node][node-section] and [browser][browser-section] configuration bundles designed for repos that have JavaScript code both targetted browser/web as well as node.js. 

You can consume this eslint configuration by adding the value: `@swellaby/eslint-config/lib/bundles/node-browser` to the `extends` key in your [eslint configuration file][eslint-config-files-url]. For example:
```json
{
    "extends": [ "@swellaby/eslint-config/lib/bundles/node-browser" ]
}
```

This bundle utilizes:
- Our [recommended rules][recommend-rules-doc-url] configuration
- Our [node env][node-env-doc-url] configuration
- Our [browser env][browser-env-doc-url] configuration
- Our [max-statement override for test files][max-statement-override-doc-url] configuration

[Back to Top][top-section]

## ts-node-browser Bundle
This is the same configuration as our [node-browser][node-browser-section] bundle, except that it is designed to be used when the repo contains source TypeScript code and eslint is linting transpiled/emitted JavaScript files.

You can consume this eslint configuration by adding the value: `@swellaby/eslint-config/lib/bundles/ts-node-browser` to the `extends` key in your [eslint configuration file][eslint-config-files-url]. For example:
```json
{
    "extends": [ "@swellaby/eslint-config/lib/bundles/ts-node-browser" ]
}
```

This bundle utilizes:
- Our [recommended rules][recommend-rules-doc-url] configuration
- Our [node env][node-env-doc-url] configuration
- Our [browser env][browser-env-doc-url] configuration
- Our [max-statement override for test files][max-statement-override-doc-url] configuration
- Our [single quotes override for transpiled js files][quotes-override-doc-url] configuration

[Back to Top][top-section]

## node-all Bundle
Similar to our [node bundle][node-section], but utilizes our configuration of the broader eslint:all ruleset.

You can consume this eslint configuration by adding the value: `@swellaby/eslint-config/bundles/node-all` to the `extends` key in your [eslint configuration file][eslint-config-files-url]. For example:
```json
{
    "extends": [ "@swellaby/eslint-config/lib/bundles/node-all" ]
}
```

This bundle utilizes:
- Our [all rules][all-rules-doc-url] configuration
- Our [node env][node-env-doc-url] configuration
- Our [max-statement override for test files][max-statement-override-doc-url] configuration

[Back to Top][top-section]

## ts-node-all Bundle
This is the same configuration as our [node-all][node-all-section] bundle, except that it is designed to be used when the repo contains source TypeScript code and eslint is linting transpiled/emitted JavaScript files.

You can consume this eslint configuration by adding the value: `@swellaby/eslint-config/lib/bundles/ts-node-all` to the `extends` key in your [eslint configuration file][eslint-config-files-url]. For example:
```json
{
    "extends": [ "@swellaby/eslint-config/lib/bundles/ts-node-all" ]
}
```

This bundle utilizes:
- Our [all rules][all-rules-doc-url] configuration
- Our [node env][node-env-doc-url] configuration
- Our [max-statement override for test files][max-statement-override-doc-url] configuration
- Our [single quotes override for transpiled js files][quotes-override-doc-url] configuration

[Back to Top][top-section]

## browser-all Bundle
Similar to our [browser bundle][browser-section], but utilizes our configuration of the broader eslint:all ruleset.

You can consume this eslint configuration by adding the value: `@swellaby/eslint-config/lib/bundles/browser-all` to the `extends` key in your [eslint configuration file][eslint-config-files-url]. 

For example:
```json
{
    "extends": [ "@swellaby/eslint-config/lib/bundles/browser-all" ]
}
```

This bundle utilizes:
- Our [all rules][recommend-rules-doc-url] configuration
- Our [browser env][browser-env-doc-url] configuration
- Our [max-statement override for test files][max-statement-override-doc-url] configuration

[Back to Top][top-section]

## ts-browser-all Bundle
This is the same configuration as our [browser-all][browser-all-section] bundle, except that it is designed to be used when the repo contains source TypeScript code and eslint is linting transpiled/emitted JavaScript files.

You can consume this eslint configuration by adding the value: `@swellaby/eslint-config/lib/bundles/ts-browser-all` to the `extends` key in your [eslint configuration file][eslint-config-files-url]. For example:
```json
{
    "extends": [ "@swellaby/eslint-config/lib/bundles/ts-browser-all" ]
}
```

This bundle utilizes:
- Our [all rules][all-rules-doc-url] configuration
- Our [browser env][browser-env-doc-url] configuration
- Our [max-statement override for test files][max-statement-override-doc-url] configuration
- Our [single quotes override for transpiled js files][quotes-override-doc-url] configuration

[Back to Top][top-section]

## node-browser-all Bundle
Similar to our [node-browser bundle][node-browser-section], but utilizes our configuration of the broader eslint:all ruleset.

You can consume this eslint configuration by adding the value: `@swellaby/eslint-config/lib/bundles/node-browser-all` to the `extends` key in your [eslint configuration file][eslint-config-files-url]. 

For example:
```json
{
    "extends": [ "@swellaby/eslint-config/lib/bundles/node-browser-all" ]
}
```

This bundle utilizes:
- Our [all rules][recommend-rules-doc-url] configuration
- Our [node env][node-env-doc-url] configuration
- Our [browser env][browser-env-doc-url] configuration
- Our [max-statement override for test files][max-statement-override-doc-url] configuration

[Back to Top][top-section]

## ts-node-browser-all Bundle
This is the same configuration as our [node-browser-all][node-browser-all-section] bundle, except that it is designed to be used when the repo contains source TypeScript code and eslint is linting transpiled/emitted JavaScript files.

You can consume this eslint configuration by adding the value: `@swellaby/eslint-config/lib/bundles/ts-node-browser-all` to the `extends` key in your [eslint configuration file][eslint-config-files-url]. For example:
```json
{
    "extends": [ "@swellaby/eslint-config/lib/bundles/ts-node-browser-all" ]
}
```

This bundle utilizes:
- Our [all rules][all-rules-doc-url] configuration
- Our [node env][node-env-doc-url] configuration
- Our [browser env][browser-env-doc-url] configuration
- Our [max-statement override for test files][max-statement-override-doc-url] configuration
- Our [single quotes override for transpiled js files][quotes-override-doc-url] configuration

[Back to Top][top-section]

[top-section]: #eslint-configuration-bundles
[node-section]: #node-bundle
[ts-node-section]: #ts-node-bundle
[node-all-section]: #node-all-bundle
[ts-node-all-section]: #ts-node-all-bundle
[browser-section]: #browser-bundle
[ts-browser-section]: #ts-browser-bundle
[browser-all-section]: #browser-all-bundle
[ts-browser-all-section]: #ts-browser-all-bundle
[node-browser-section]: #node-browser-bundle
[ts-node-browser-section]: #ts-node-browser-bundle
[node-browser-all-section]: #node-browser-all-bundle
[ts-node-browser-all-section]: #ts-node-browser-all-bundle
[rules-doc]: ./RULES.md
[environments-doc]: ./ENVIRONMENTS.md
[overrides-doc]: ./OVERRIDES.md
[eslint-url]: https://eslint.org/
[eslint-config-files-url]: https://eslint.org/docs/user-guide/configuring#using-configuration-files
[recommend-rules-doc-url]: ./RULES.md#recommended-configuration
[all-rules-doc-url]: ./RULES.md#all-configuration
[node-env-doc-url]: ./ENVIRONMENTS.md#node-environment
[browser-env-doc-url]: ./ENVIRONMENTS.md#browser-environment
[max-statement-override-doc-url]: ./OVERRIDES.md#max-statements-disabled-for-test-files
[quotes-override-doc-url]: ./OVERRIDES.md#single-quotes-disabled-for-transpiled-files