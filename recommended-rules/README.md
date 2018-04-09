# eslint-config-recommended
Our configuration for [eslint][eslint-url] extending the [eslint:recommended ruleset][eslint-recommended-rules-url] of [eslint][eslint-url]. Geared for our specific needs, but feel free to use it if it helps for you (you can always override any rule in your eslint config file)!  
[![npmjs Badge][npmjs-version-badge]][npmjs-pkg-url] [![license Badge][license-badge]][license-url]

## Installation
Install the eslint config as a dev dependency:
```sh
npm i @swellaby/eslint-config-recommended --save-dev
```

## Usage
Add an `extends` key to your [eslint config file][eslint-config-files-url] with the value of `@swellaby/eslint-config-recommended`:

For example if you have your eslint config in a json file:
```json
{
    "extends": "@swellaby/eslint-config-recommended"
}
``` 

## Configuration
This module specifies the following eslint configuration:

* A
* B
* C
* D

## License
MIT - see license details [here][license-url]

[npmjs-version-badge]: https://img.shields.io/npm/v/@swellaby/eslint-config-recommended.svg
[npmjs-pkg-url]: https://www.npmjs.com/package/@swellaby/eslint-config-recommended
[eslint-url]: https://eslint.org/
[eslint-recommended-rules-url]: https://eslint.org/docs/user-guide/configuring#using-eslintrecommended
[license-url]: https://github.com/swellaby/eslint-config/blob/master/LICENSE
[license-badge]: https://img.shields.io/github/license/swellaby/eslint-config.svg