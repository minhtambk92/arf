/**
 * Created by manhhailua on 1/14/17.
 */

/* eslint-disable no-console */

import gulp from 'gulp';
import { spawn } from 'child_process';
import { StringDecoder } from 'string_decoder';

const decoder = new StringDecoder('utf8');

function printLogs(process) {
  process.stdout.on('data', (data) => {
    console.log(decoder.end(Buffer.from(data)));
  });

  process.stderr.on('data', (data) => {
    console.log(decoder.end(Buffer.from(data)));
  });
}

const CREATE_LIBRARY_DEVELOPMENT_VERSION = 'create-library-development-version';
const CREATE_LIBRARY_PRE_BUILD_VERSION = 'create-library-pre-build-version';
const CREATE_LIBRARY_RELEASE_VERSION = 'create-library-release-version';
const CREATE_TEMPLATE_DEVELOPMENT_VERSION = 'create-template-development-version';
const CREATE_TEMPLATE_RELEASE_VERSION = 'create-template-release-version';
const BUNDLE_LIBRARY = 'bundle-library';
const BUNDLE_TEMPLATE = 'bundle-template';
const DEFAULT = 'default';
const WATCH = 'watch';
const WATCH_TEMPLATE = 'watch-template';

gulp.task(CREATE_LIBRARY_DEVELOPMENT_VERSION, () => {
  // exec('node_modules/.bin/webpack --env=development --name=Arf --progress --colors');
  const pc = spawn('node_modules/.bin/webpack', [
    '--env=development',
    '--name=Arf',
    '--colors',
  ]);

  printLogs(pc);
});

gulp.task(CREATE_LIBRARY_PRE_BUILD_VERSION, () => {
  // exec('node_modules/.bin/webpack --env=production --name=Arf --progress --colors');
  const pc = spawn('node_modules/.bin/webpack', [
    '--env=production',
    '--name=Arf',
    '--colors',
  ]);

  printLogs(pc);
});

gulp.task(CREATE_LIBRARY_RELEASE_VERSION, () => {
  // exec('node_modules/.bin/webpack --env=production --name=Arf --progress --colors --release')
  const pc = spawn('node_modules/.bin/webpack', [
    '--env=production',
    '--name=Arf',
    '--colors',
    '--release',
  ]);

  printLogs(pc);
});

gulp.task(CREATE_TEMPLATE_DEVELOPMENT_VERSION, () => {
  // exec('node_modules/.bin/webpack --config=./webpack.template.config.babel.js --env=development
  // --progress --colors');
  const pc = spawn('node_modules/.bin/webpack', [
    '--config=./webpack.template.config.babel.js',
    '--env=development',
    '--colors',
  ]);

  printLogs(pc);
});

gulp.task('create-template-release-version', () => {
  // exec('node_modules/.bin/webpack --config=./webpack.template.config.babel.js --env=production
  // --progress --colors');
  const pc = spawn('node_modules/.bin/webpack', [
    '--config=./webpack.template.config.babel.js',
    '--env=production',
    '--colors',
  ]);

  printLogs(pc);
});

gulp.task(BUNDLE_LIBRARY, [
  CREATE_LIBRARY_DEVELOPMENT_VERSION,
  CREATE_LIBRARY_PRE_BUILD_VERSION,
  CREATE_LIBRARY_RELEASE_VERSION,
]);

gulp.task(BUNDLE_TEMPLATE, [
  CREATE_TEMPLATE_DEVELOPMENT_VERSION,
  CREATE_TEMPLATE_RELEASE_VERSION,
]);

gulp.task(DEFAULT, [
  BUNDLE_LIBRARY,
  BUNDLE_TEMPLATE,
]);

gulp.task(WATCH, () => {
  gulp.watch('./src/*', [BUNDLE_LIBRARY]);
});

gulp.task(WATCH_TEMPLATE, () => {
  gulp.watch('./src/template.js', [BUNDLE_TEMPLATE]);
});
