# Contributing
Contributions are welcomed, but keep in mind this is eslint config designed specifically for Swellaby codebases so we wil reject any rule changes that conflict with our desired state. 

## Opening Issues
Click the below links to create a new issue:

- [Report a bug][create-bug-url]
- [Request an enhancement][create-enhancement-url]
- [Ask a question][create-question-url]

## Developing
All that is needed to work with this repo is [Node.js][nodejs-url] and your favorite editor or IDE, although we recommend [VS Code][vscode-url].

### Building
To build and/or work on this project:

Clone the repo, change into the directory where you cloned the directory, and then run the developer setup script
```sh     
git clone https://github.com/swellaby/eslint-config.git
cd eslint-config 
npm run dev:setup
```

### Submitting changes
Swellaby members should create a branch within the repository, make changes there, and then submit a PR. 

Outside contributors should fork the repository, make changes in the fork, and then submit a PR.

### Tests
Unit tests are written using [Mocha][mocha-url] utilizing [Mocha's TDD interface][mocha-tdd-url]. 

The tests will be run as part of the npm `build` script and can also be run directly via the npm `test` script. The test results will be displayed in the console.

```sh
npm test
```  

If you update any of the various eslint configurations, ensure you update the corresponding unit test(s) as well.

### Linting
Unsurprisingly, this repo uses [eslint][eslint-url] for linting the source code. eslint is automatically run when you run the npm `build` script and when you make a commit. The eslint configuration file (`.eslintrc.js`) can be found in the root directory.

You can run [eslint][eslint-url] at any time by executing the npm `lint` script:

```sh
npm run lint
```  

[Back to Top][top]

[create-bug-url]: https://github.com/swellaby/eslint-config/issues/new?labels=bug&title=Bug:%20
[create-question-url]: https://github.com/swellaby/eslint-config/issues/new?labels=question,unreviewed&title=Q:%20
[create-enhancement-url]: https://github.com/swellaby/eslint-config/issues/new?labels=enhancement,unreviewed&title=E:%20
[nodejs-url]:https://nodejs.org/en/download/
[vscode-url]: https://code.visualstudio.com/
[eslint-url]: https://eslint.org/
[mocha-url]: https://mochajs.org/
[mocha-tdd-url]: https://mochajs.org/#tdd
[top]: #contributing