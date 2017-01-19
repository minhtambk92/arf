/**
 * Created by manhhailua on 1/4/17.
 */

import path from 'path';
import webpack from 'webpack';
import yargs from 'yargs';
import {
  version,
  description,
  author,
  license,
  homepage,
} from './package.json';

const { name, release } = yargs.argv;
const libraryName = name || 'Library';
const libraryFileName = `${libraryName}${release ? '.min' : ''}.js`;

const config = {

  entry: `${__dirname}/src/index.js`,

  devtool: 'source-map',

  output: {
    path: `${__dirname}/build`,
    filename: libraryFileName,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
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

  resolve: {
    alias: {
      vue$: `${__dirname}/node_modules/vue/dist/vue.common.js`,
    },
    root: path.resolve('./src'),
    extensions: ['', '.js'],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': release ? '"production"' : '"development"',
    }),
    ...release ? [
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false },
        comments: false,
      }),
    ] : [],
    // optimize module ids by occurence count
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.BannerPlugin(`${libraryFileName} v${version}\n${description}\n© 2016-${new Date().getFullYear()} ${author}\nReleased under the ${license} License.\n${homepage}`),
  ],

};

export default config;
