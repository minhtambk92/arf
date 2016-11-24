import path from 'path';
import webpack from 'webpack'; // eslint-disable-line import/no-extraneous-dependencies
import yargs from 'yargs'; // eslint-disable-line import/no-extraneous-dependencies

const env = yargs.argv.mode;
const isProduction = (env === 'build');
const libraryName = 'Library';

const config = {

  entry: `${__dirname}/src/index.js`,

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
        test: /(\.jsx|\.js)$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: { compact: 'auto' },
      },
      {
        test: /(\.jsx|\.js)$/,
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
    ...(isProduction ? [
      // In production plugins
      // minify with dead-code elimination
      new webpack.optimize.UglifyJsPlugin({
        compress: isProduction && { warnings: false },
      }),
    ] : [
      // In development plugins
    ]),
    // optimize module ids by occurence count
    new webpack.optimize.OccurenceOrderPlugin(),
  ],

};

module.exports = config;
