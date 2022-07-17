const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (_, argv) => {
  console.log(`running webpack with args ${JSON.stringify(argv)}`);
  return {
    mode: argv.mode,
    output: {
      path: __dirname,
      filename: 'bundle.js',
      publicPath: '/',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
      alias: {
        '/assets': path.resolve(
          __dirname,
          'node_modules/govuk-frontend/govuk/assets',
        ),
      },
    },
    devtool: 'source-map',
    module: {
      rules: [
        { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
        { test: /\.tsx?$/, loader: 'babel-loader' },
        { test: /\.tsx?$/, loader: 'ts-loader' },
        { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      ],
    },
    devServer: {
      hot: true,
      port: 3000,
      allowedHosts: 'all',
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new CopyPlugin({
        patterns: [
          { from: 'node_modules/govuk-frontend/govuk/assets', to: 'assets' },
        ],
      }),
      new Dotenv({
        path: `.environments/env.${argv.mode}`,
      }),
    ],
  };
};
