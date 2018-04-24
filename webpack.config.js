const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
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
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: () => [autoprefixer()],
              },
            },
            'sass-loader',
          ],
        }),
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    browsers: ['>0.25%', 'not ie 11', 'not op_mini all'],
                  },
                },
              ],
              ['@babel/preset-stage-2'],
            ],
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
    new ExtractTextPlugin('css/[name].[hash].css'), // etracts css to dist/css/styles.css
    new HtmlWebpackPlugin({
      template: 'index.ejs', // creates an `index.html`-file from `index.ejs`
    }),
  ],
};

module.exports = config;
