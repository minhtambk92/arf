/**
 * Created by manhhailua on 1/4/17.
 */

import webpack from 'webpack';
import yargs from 'yargs';

const { env, name } = yargs.argv;
const isProduction = (env === 'production');
const libraryName = name || 'Template';

const config = {

  entry: `${__dirname}/src/template.js`,

  devtool: 'source-map',

  output: {
    path: `${__dirname}/build`,
    filename: isProduction ? `${libraryName}.min.js` : `${libraryName}.js`,
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

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': isProduction ? '"production"' : '"development"',
    }),
    ...isProduction ? [new webpack.optimize.UglifyJsPlugin({ compress: { warnings: true } })] : [],
    // optimize module ids by occurence count
    new webpack.optimize.OccurenceOrderPlugin(),
  ],

};

module.exports = config;
