const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (_, argv) => {
  console.log(`running webpack with args ${JSON.stringify(argv)}`);
  return {
    mode: argv.mode,
    output: {
      filename: '[name].js',
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
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    devServer: {
      hot: true,
      port: 3000,
      allowedHosts: 'localhost',
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: `cop-targeting-ui-${argv.mode}`,
        template: './src/index.html',
      }),
      new Dotenv({
        path: `.environments/env.${argv.mode}`,
      })
    ],
  };
};
