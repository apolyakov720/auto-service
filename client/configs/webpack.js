const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const DefinePlugin = webpack.DefinePlugin;
const packageJSON = require('../package.json');
const eslintConfig = require('./eslint.js');

const { version: productVersion, name: productName } = packageJSON;

/** Относительные (этого файла) пути к ресурсам */
const paths = {
  // Основная директория приложения
  src: '../src',

  // Директория сборки приложения
  build: '../build',

  // Директория с иконками
  favicon: 'assets/icons/favicon',
};

const mode = {
  development: 'development',
  production: 'production',
};
const environment = process.env.NODE_ENV || mode.production;
const isDevelopment = environment === mode.development;
const isProduction = environment === mode.production;

// Прерывает пакетирование при возникновении первой ошибки
let bail = false;

// Имя файлов, котороые будут загружены динамически в процессе работы приложения
let chunkFilename = 'js/[name].js';

// Функция для отображения имен модулей в консоле браузера, чтобы улучшить процесс отладки
let devtoolModuleFilenameTemplate = (info) =>
  path.resolve(info.absoluteResourcePath).replace(/\\/g, '/');

// Инструмент для генерирования исходных карт, чтобы улучшить процесс отладки
let devtool = 'eval-source-map';

// Набор различных плагинов для настройки процесса сборки
const plugins = [];

// Инструмент для контролирования файлов, которые превышают определенный лимит
let performance;

// Свойства оптимизации
let optimizationOptions = {};

// Свойства минимизатора html кода
// https://github.com/terser/html-minifier-terser
let htmlMinifyOptions = {};

if (isProduction) {
  bail = true;

  chunkFilename = 'js/[name][chunkhash:8].js';

  devtoolModuleFilenameTemplate = (info) =>
    path.relative(path.join(__dirname, paths.src), info.absoluteResourcePath).replace(/\\/g, '/');

  devtool = false;

  plugins.push(
    new MiniCssExtractPlugin({
      filename: `bundle.${productVersion}.css`,
    }),
  );

  performance = {
    assetFilter: (assetFilename) => /\.jsx?$/i.test(assetFilename),
    hints: 'warning',
    maxAssetSize: 1000000, // 1мб
    maxEntrypointSize: 3000000, // 3мб
  };

  // https://github.com/terser/terser#minify-options
  optimizationOptions = {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          keep_classnames: true,
          keep_fnames: true,
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
      }),
    ],
  };

  htmlMinifyOptions = {
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      collapseInlineTagWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true,
    },
  };
}

module.exports = {
  bail,
  devtool,
  performance,
  mode: environment,
  entry: {
    application: path.join(__dirname, paths.src, 'index.js'),
  },
  output: {
    chunkFilename,
    devtoolModuleFilenameTemplate,
    filename: `bundle.${productVersion}.js`,
    path: path.join(__dirname, paths.build),
    clean: true,
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
  stats: {
    preset: 'errors-warnings',
    assets: false,
    colors: true,
    errorDetails: true,
  },
  optimization: {
    removeAvailableModules: true,
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'all',
          reuseExistingChunk: true,
          enforce: true,
        },
        styles: {
          name: 'styles',
          test: /\.(styl|css)$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
    ...optimizationOptions,
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
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname, paths.src, paths.favicon),
          to: paths.favicon,
        },
      ],
    }),
    new HtmlWebpackPlugin({
      title: `${productName} ${productVersion}`,
      template: path.join(__dirname, paths.src, 'index.html'),
      inject: 'body',
      faviconPaths: paths.favicon,
      ...htmlMinifyOptions,
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
    ...plugins,
  ],
};
