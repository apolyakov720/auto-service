const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const DefinePlugin = require('webpack').DefinePlugin;
const packageJSON = require('../package.json');
const eslintConfig = require('./eslint.js');

const faviconPath = path.resolve(__dirname, '../src/assets/icons/favicon');

const plugins = [
  new CopyPlugin({
    patterns: [
      {
        from: faviconPath,
        to: 'assets/icons',
      },
    ],
  }),
  new ESLintPlugin({
    context: '../src',
    extensions: ['js', 'jsx'],
    failOnError: false,
    baseConfig: eslintConfig,
  }),
  new DefinePlugin({
    USE_MOCK_API: process.env.USE_MOCK_API,
  }),
];

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    filename: `bundle.${packageJSON.version}.js`,
    path: path.join(__dirname, '../build'),
    chunkFilename: 'js/[name].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@assets': path.resolve(__dirname, '../src/assets'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@constants': path.resolve(__dirname, '../src/constants'),
      '@services': path.resolve(__dirname, '../src/services'),
      '@utils': path.resolve(__dirname, '../src/utils'),
      '@pages': path.resolve(__dirname, '../src/pages'),
      '@store': path.resolve(__dirname, '../src/store'),
      '@core': path.resolve(__dirname, '../src/core'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          configFile: path.resolve(__dirname, './babel.js'),
          cacheDirectory: true,
        },
      },
      {
        test: /\.styl$/i,
        use: [
          {
            loader: 'style-loader',
            options: {
              injectType: 'singletonStyleTag',
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 3,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['autoprefixer']],
              },
            },
          },
          {
            loader: 'stylus-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name].[ext]',
        },
      },
      {
        test: /\.svg$/i,
        type: 'asset/resource',
        issuer: /\.styl$/i,
        generator: {
          filename: 'assets/icons/[name].[ext]',
        },
      },
      {
        test: /\.svg$/i,
        issuer: /\.jsx?$/i,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              icon: true,
            },
          },
        ],
      },
      {
        test: /\.(woff2?|ttf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name].[ext]',
        },
      },
    ],
  },
  devtool: 'eval-source-map',
  stats: {
    colors: true,
    errorDetails: true,
  },
  plugins,
};
