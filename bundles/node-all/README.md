# eslint-config-node-all
Our [eslint][eslint-url] configuration bundle that provides our desired linting setup for node based projects, using the broader eslint:all ruleset configuration. Geared for our specific needs, but feel free to use it if it helps for you (you can always override any rule in your eslint config file)!  
[![npmjs Badge][npmjs-version-badge]][npmjs-pkg-url] [![license Badge][license-badge]][license-url]

## Installation
Install the eslint config as a dev dependency:
```sh
npm i @swellaby/eslint-config-node-all --save-dev
```

## Usage
Add an `extends` key to your [eslint config file][eslint-config-files-url] and in the value specify an array that includes `@swellaby/eslint-config-node-all`:

For example if you have your eslint config in a json file:
```json
{
    "extends": [ "@swellaby/eslint-config-node-all" ]
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

[npmjs-version-badge]: https://img.shields.io/npm/v/@swellaby/eslint-config-node-all.svg
[npmjs-pkg-url]: https://www.npmjs.com/package/@swellaby/eslint-config-node-all
[eslint-url]: https://eslint.org/
[eslint-config-files-url]: https://eslint.org/docs/user-guide/configuring#using-configuration-files
[license-url]: https://github.com/swellaby/eslint-config/blob/master/LICENSE
[license-badge]: https://img.shields.io/github/license/swellaby/eslint-config.svg