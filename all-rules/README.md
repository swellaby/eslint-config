# eslint-config-all
Our configuration for [eslint][eslint-url] extending the [eslint:all ruleset][eslint-all-rules-url] of [eslint][eslint-url]. Geared for our specific needs, but feel free to use it if it helps you (you can always override any rule in your eslint config file)!  
[![npmjs Badge][npmjs-version-badge]][npmjs-pkg-url] [![license Badge][license-badge]][license-url]

## Installation
Install the eslint config as a dev dependency:
```sh
npm i @swellaby/eslint-config-all --save-dev
```

## Usage
Add an `extends` key to your [eslint config file][eslint-config-files-url] with the value of `@swellaby/eslint-config-all`:

For example if you have your eslint config in a json format:
```json
{
    ...
    "extends": "@swellaby/eslint-config-all",
    ...
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

[npmjs-version-badge]: https://img.shields.io/npm/v/@swellaby/eslint-config-all.svg
[npmjs-pkg-url]: https://www.npmjs.com/package/@swellaby/eslint-config-all
[eslint-url]: https://eslint.org/
[eslint-all-rules-url]: https://eslint.org/docs/user-guide/configuring#using-eslintall
[eslint-config-files-url]: https://eslint.org/docs/user-guide/configuring#using-configuration-files
[license-url]: https://github.com/swellaby/eslint-config/blob/master/LICENSE
[license-badge]: https://img.shields.io/github/license/swellaby/eslint-config.svg