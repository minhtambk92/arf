# Advertisement Rendering Framework (ARF)

**Vuejs** + **Babel** + **Webpack** + **Gulp** based framework for rendering ads on your websites.

## Features

* Webpack based.
* Polyfill with Babel.
* Vuejs as a rendering framework and an ads states manager.
* ES6 as a source.
* Exports in a [umd](https://github.com/umdjs/umd) format so your library works everywhere.
* ES6 test setup with [Mocha](http://mochajs.org/) and [Chai](http://chaijs.com/).
* Linting with [ESLint](http://eslint.org/) follow AirBnB style guide.

*Have in mind that you have to build your library before publishing. The files under the `build` folder are the ones that should be distributed.*

## Getting started

1. Setting up the name of your library
  * Open `webpack.config.babel.js` file and change the value of `libraryName` variable or add `--name=<your library name>` to the build commands.
  * Open `package.json` file and change the value of `main` property so it matches the name of your library.
2. Build your library
  * Run `npm install` to get the project's dependencies
  * Run `npm run build` to produce your library (outputs are three version of your library: development, pre-build, production).
3. Development mode
  * Having all the dependencies installed run `npm start` or `npm run develop`. This command will watch the `src` folder and regenerate all versions of your library so you get the compilation on file change.
4. Running the tests
  * Run `npm run test`

## Scripts

* `npm run develop` - produces all versions of your library and template in watcher mode
* `npm run build` - produces all versions of your library and template once
* `npm run test` - well ... it runs the tests :)
