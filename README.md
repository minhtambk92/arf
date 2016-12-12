# Advertisement Rendering Framework (ARF)

**Webpack** + **Babel** + **Vuejs** based framework for rendering ads on your websites.

## Features

* Webpack based.
* Polyfill with Babel.
* Vuejs as a rendering framework and a ads states manager.
* ES6 as a source.
* Exports in a [umd](https://github.com/umdjs/umd) format so your library works everywhere.
* ES6 test setup with [Mocha](http://mochajs.org/) and [Chai](http://chaijs.com/).
* Linting with [ESLint](http://eslint.org/) follow AirBnB style guide.

*Have in mind that you have to build your library before publishing. The files under the `lib` folder are the ones that should be distributed.*

## Getting started

1. Setting up the name of your library
  * Open `webpack.config.babel.js` file and change the value of `libraryName` variable or add `--name=<your library name>` to the build commands.
  * Open `package.json` file and change the value of `main` property so it matches the name of your library.
2. Build your library
  * Run `npm install` to get the project's dependencies
  * Run `npm run build` to produce minified version of your library.
3. Development mode
  * Having all the dependencies installed run `npm start` or `npm run develop`. This command will generate an non-minified version of your library and will run a watcher so you get the compilation on file change.
4. Running the tests
  * Run `npm run test`

## Scripts

* `npm run develop` - produces development version of your library and runs a watcher
* `npm run build` - produces production version of your library under the `build` folder
* `npm run test` - well ... it runs the tests :)
