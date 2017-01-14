/**
 * Created by manhhailua on 1/14/17.
 */

import gulp from 'gulp';
import { exec } from 'child_process';

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
  exec('node_modules/.bin/webpack --env=development --name=Arf --progress --colors');
});

gulp.task(CREATE_LIBRARY_PRE_BUILD_VERSION, () => {
  exec('node_modules/.bin/webpack --env=production --name=Arf --progress --colors');
});

gulp.task(CREATE_LIBRARY_RELEASE_VERSION, () => {
  exec('node_modules/.bin/webpack --env=production --name=Arf --release --progress --colors');
});

gulp.task(CREATE_TEMPLATE_DEVELOPMENT_VERSION, () => {
  exec('node_modules/.bin/webpack --config=./webpack.template.config.babel.js --env=development --progress --colors');
});

gulp.task('create-template-release-version', () => {
  exec('node_modules/.bin/webpack --config=./webpack.template.config.babel.js --env=production --progress --colors');
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
