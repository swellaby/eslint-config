# eslint-config-browser
Our [eslint][eslint-url] configuration bundle that provides our desired linting setup for browser based projects using the eslint:recommended rule set. Geared for our specific needs, but feel free to use it if it helps for you (you can always override any rule in your eslint config file)!  
[![npmjs Badge][npmjs-version-badge]][npmjs-pkg-url] [![license Badge][license-badge]][license-url]

## Installation
Install the eslint config as a dev dependency:
```sh
npm i @swellaby/eslint-config-browser --save-dev
```

## Usage
Add an `extends` key to your [eslint config file][eslint-config-files-url] and in the value specify an array that includes `@swellaby/eslint-config-browser`:

For example if you have your eslint config in a json file:
```json
{
    "extends": [ "@swellaby/eslint-config-browser" ]
}
``` 

## Configuration
This module includes our following eslint configurations:  

* [eslint-config-recommended][eslint-recommended-config] - Our configuration of the eslint:recommended ruleset
* [eslint-config-env-browser][eslint-env-browser-config] - Our configuration of the eslint globals/environments for browser targetted codebases

## License
MIT - see license details [here][license-url]

[npmjs-version-badge]: https://img.shields.io/npm/v/@swellaby/eslint-config-browser.svg
[npmjs-pkg-url]: https://www.npmjs.com/package/@swellaby/eslint-config-browser
[eslint-url]: https://eslint.org/
[eslint-config-files-url]: https://eslint.org/docs/user-guide/configuring#using-configuration-files
[license-url]: https://github.com/swellaby/eslint-config/blob/master/LICENSE
[license-badge]: https://img.shields.io/github/license/swellaby/eslint-config.svg
[eslint-recommended-config]: https://github.com/swellaby/eslint-config/blob/master/rules/recommended/README.md#configuration
[eslint-env-browser-config]: https://github.com/swellaby/eslint-config/blob/master/env/browser/README.md#configuration