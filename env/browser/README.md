# eslint-config-env-browser
Our configuration for [eslint][eslint-url] that enables the environmental globals of [eslint][eslint-url] common in web/browser targeted codebases. Geared for our specific needs, but feel free to use it if it helps you (you can always override any rule in your eslint config file)!  
[![npmjs Badge][npmjs-version-badge]][npmjs-pkg-url] [![license Badge][license-badge]][license-url]

## Installation
Install the eslint config as a dev dependency:
```sh
npm i @swellaby/eslint-config-env-browser --save-dev
```

## Usage
Add an `extends` key to your [eslint config file][eslint-config-files-url] and in the value specify an array that includes `@swellaby/eslint-config-env-browser`:

For example if you have your eslint config in a json format:
```json
{
    ...
    "extends": [ "@swellaby/eslint-config-env-browser" ],
    ...
}
``` 

## Configuration
This module enables the below eslint env globals that are common in our node codebases:

* `browser`
* `es6`
* `jasmine`
* `jest`
* `mocha`
* `protractor`

## License
MIT - see license details [here][license-url]

[npmjs-version-badge]: https://img.shields.io/npm/v/@swellaby/eslint-config-env-browser.svg
[npmjs-pkg-url]: https://www.npmjs.com/package/@swellaby/eslint-config-env-browser
[eslint-url]: https://eslint.org/
[eslint-config-files-url]: https://eslint.org/docs/user-guide/configuring#using-configuration-files
[license-url]: https://github.com/swellaby/eslint-config/blob/master/LICENSE
[license-badge]: https://img.shields.io/github/license/swellaby/eslint-config.svg