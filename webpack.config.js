const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader',
        }),
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-stage-2'],
          },
        },
      },
    ],
  },
  devtool: 'inline-source-map', // Use source maps
  devServer: {
    port: 3000, // Tell dev-server which port to run
    open: true, // to open the local server in browser
    contentBase: path.resolve(__dirname, 'dist'), // serve from 'dist' folder when in dev mode
  },
  plugins: [
    new CleanWebpackPlugin(['dist']), // cleans the dist folder on every new build
    new ExtractTextPlugin('css/styles.css'), // etracts css to dist/css/styles.css
    new HtmlWebpackPlugin({
      template: 'index.ejs', // creates an `index.html`-file from `index.ejs`
    }),
  ],
};

module.exports = config;
