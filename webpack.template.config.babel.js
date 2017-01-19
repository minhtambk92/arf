/**
 * Created by manhhailua on 1/4/17.
 */

import webpack from 'webpack';
import yargs from 'yargs';
import { version, author } from './package.json';

const { name, release } = yargs.argv;
const libraryName = name || 'Template';

const config = {

  entry: `${__dirname}/src/template.js`,

  devtool: 'source-map',

  output: {
    path: `${__dirname}/build`,
    filename: release ? `${libraryName}.min.js` : `${libraryName}.js`,
  },

  module: {
    loaders: [
      {
        test: /(\.js)$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          compact: 'auto',
        },
      },
      {
        test: /(\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': release ? '"production"' : '"development"',
    }),
    ...release ? [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
      }),
    ] : [],
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.BannerPlugin(`Advertisement data\nTemplate file v${version}\n© 2016-${new Date().getFullYear()} ${author}\nZone: {{zoneId}}`),
  ],

};

export default config;
