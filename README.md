# eslint-config
[![npm version badge][eslint-config-version-badge]][eslint-config-pkg-url]
[![npm downloads badge][npmjs-downloads-badge]][eslint-config-pkg-url]
[![Circle CI Badge][circle-ci-badge]][circle-ci-url]
[![license Badge][license-badge]][license-url]  

Contains our various [eslint][eslint-url] configurations. Geared for our desired linting configuration, but feel free to use it if helps you.

## Install
Install the package as a dev dependency:
```sh
npm i @swellaby/eslint-config --save-dev
```

## Usage
Add the desired configuration to the `extends` key in your [eslint configuration file][eslint-config-files-url].

For example to use our default configuration (designed for node.js targetted codebases):

```json
{
    "extends": [ "@swellaby/eslint-config" ]
}
```

Or to use our default configuration designed for browser/web targetted codebases

```json
{
    "extends": [ "@swellaby/eslint-config/lib/bundles/browser" ]
}
```

This module includes several other eslint configurations, which are described in detail in our [config bundle documentation][bundles-docs]. 

## Contributing
See the [Contributing docs][contributing-docs] for details about how to contribute, build, etc.

## License
MIT - see license details [here][license-url] 

[license-url]: https://github.com/swellaby/eslint-config/blob/master/LICENSE
[license-badge]: https://img.shields.io/github/license/swellaby/eslint-config.svg
[circle-ci-badge]: https://circleci.com/gh/swellaby/eslint-config.svg?style=shield
[circle-ci-url]: https://circleci.com/gh/swellaby/eslint-config
[eslint-config-version-badge]: https://img.shields.io/npm/v/@swellaby/eslint-config.svg
[eslint-config-pkg-url]: https://www.npmjs.com/package/@swellaby/eslint-config
[npmjs-downloads-badge]: https://img.shields.io/npm/dt/@swellaby/eslint-config.svg
[eslint-url]: https://eslint.org/
[eslint-config-files-url]: https://eslint.org/docs/user-guide/configuring#using-configuration-files
[bundles-docs]: docs/BUNDLES.md
[contributing-docs]: docs/CONTRIBUTING.md