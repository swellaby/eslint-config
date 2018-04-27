# eslint Configuration Bundles
This module contains several different configurations for [eslint][eslint-url. These bundles in turn package together specific pairings of our eslint configuration for eslint [rules][rules-doc], [environments][environments-doc], and [rule overrides][overrides-doc] to provide you with a singular, complete eslint configuration for a variety of types of codebase scenarios. 

We highly recommend that you use one of the provided bundles when utilizing this module, but you can optionally use any combination our underlying [rule configurations][rules-doc], [environment configurations][environments-doc], and/or [rule override configurations][overrides-doc] if you'd like.

The below table summarizes all of the various [eslint][eslint-url] configuration bundles that are included in this module, and the value listed for `Consumption Path` for the bundle is what you'd add to the value of your [eslint config file][eslint-config-files-url] `extends` key to utilize that configuration. 

| Bundle | Summary | Consumption Path |
|-------------|-------------|----------|
| [node][node-section] | Our primary eslint config for node.js targetted codebases which utilizes our configuration of the eslint:recommended ruleset. Should be the default config option for node.js repos. | `@swellaby/eslint-config` |  
| [node-all][node-all-section] | A more complex eslint config for node.js codebases, utilizing the eslint:all ruleset. Use this config option for node.js repos where you want to enforce a stricter set of linting rules. | `@swellaby/eslint-config/lib/bundles/node-all` |
| [browser][browser-section] | Our primary eslint config lib for browser/web targetted codebases which utilizes our configuration of the eslint:recommended ruleset. Should be the default config option for browser/web repos. | `@swellaby/eslint-config/lib/bundles/browser` | 
| [browser-all][browser-all-section] | A more complex eslint config for browser/web targetted codebases, utilizing the eslint:all ruleset. Use this config option for browser/web repos where you want to enforce a stricter set of linting rules. | `@swellaby/eslint-config/lib/bundles/browser-all` |
| [node-browser][node-browser-section] | Our eslint config for codebases that have a mix of code targetted *both* for node.js as well as browser/web. Utilizes our configuration of the eslint:recommended ruleset. | `@swellaby/eslint-config/lib/bundles/node-browser` | 
| [node-browser-all][node-browser-all-section] | A more complex eslint config for codebases that have a mix of code targetted *both* for node.js as well as browser/web. Utilizes our configuration of the eslint:all ruleset so use it when you want to enforce a stricter set of linting rules | `@swellaby/eslint-config/lib/bundles/node-browser-all` | 

## node Bundle
This is our default configuration for node.js targetted repos, and it is also the default configuration exported by the module. 

[Back to Top][top-section]

## node-all Bundle

[Back to Top][top-section]

## browser Bundle

[Back to Top][top-section]

## browser-all Bundle

[Back to Top][top-section]

## node-browser Bundle

[Back to Top][top-section]

## node-browser-all Bundle

[Back to Top][top-section]

[top-section]: #eslint-configuration-bundles
[node-section]: #node-bundle
[node-all-section]: #node-all-bundle
[browser-section]: #browser-bundle
[browser-all-section]: #browser-all-bundle
[node-browser-section]: #node-browser-bundle
[node-browser-all-section]: #node-browser-all-bundle
[rules-doc]: ./RULES.md
[environments-doc]: ./ENVIRONMENTS.md
[overrides-doc]: ./OVERRIDES.md
[eslint-url]: https://eslint.org/
[eslint-config-files-url]: https://eslint.org/docs/user-guide/configuring#using-configuration-files