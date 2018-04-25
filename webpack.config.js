const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: () => [
                autoprefixer({
                  // which browsers to prefix css for: http://browserl.ist/
                  browsers: ['last 3 versions', '> 1%'],
                }),
              ],
            },
          },
          'sass-loader',
        ],
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
                    // which browsers to convert javascript for: http://browserl.ist/
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
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
    }),
    new HtmlWebpackPlugin({
      template: 'index.ejs', // creates an `index.html`-file from `index.ejs`
    }),
  ],
};

module.exports = config;
