const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const DefinePlugin = webpack.DefinePlugin;
const packageJSON = require('../package.json');
const eslintConfig = require('./eslint.js');

const { version } = packageJSON;
const mode = {
  development: 'development',
  production: 'production',
};
const environment = process.env.NODE_ENV || mode.production;
const isDevelopment = environment === mode.development;
const isProduction = environment === mode.production;

module.exports = {
  mode: environment,
  bail: isProduction,
  entry: {
    application: path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    filename: `bundle.${version}.js`,
    path: path.resolve(__dirname, '../build'),
    chunkFilename: isProduction ? 'js/[name][chunkhash:8].js' : 'js/[name].js',
    publicPath: '/',
    devtoolModuleFilenameTemplate: isDevelopment
      ? (info) => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')
      : (info) =>
          path
            .relative(path.resolve(__dirname, '../src'), info.absoluteResourcePath)
            .replace(/\\/g, '/'),
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, '../src')],
    extensions: ['.js', '.jsx', '...'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@assets': path.resolve(__dirname, '../src/assets'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@core': path.resolve(__dirname, '../src/core'),
      '@pages': path.resolve(__dirname, '../src/pages'),
      '@services': path.resolve(__dirname, '../src/services'),
      '@store': path.resolve(__dirname, '../src/store'),
      '@utils': path.resolve(__dirname, '../src/utils'),
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
          isDevelopment
            ? {
                loader: 'style-loader',
                options: {
                  injectType: 'singletonStyleTag',
                },
              }
            : MiniCssExtractPlugin.loader,
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
  devtool: isDevelopment ? 'eval-source-map' : false,
  stats: {
    preset: 'errors-warnings',
    assets: false,
    colors: true,
    errorDetails: true,
  },
  performance: {
    assetFilter: (assetFilename) => /\.jsx?$/i.test(assetFilename),
    hints: 'warning',
    maxAssetSize: 1000000, // 1мб
    maxEntrypointSize: 3000000, // 3мб
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../src/assets/icons/favicon'),
          to: 'assets/icons/favicon',
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
    isProduction &&
      new MiniCssExtractPlugin({
        filename: `bundle.${version}.css`,
      }),
  ],
};
