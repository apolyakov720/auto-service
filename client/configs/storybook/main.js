const webpackConfig = require('../webpack');

module.exports = {
  stories: ['../../src/**/*.stories.mdx', '../../src/**/*.stories.@(js|jsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) => {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test('.svg'));

    fileLoaderRule.exclude = /\.svg$/;

    config.module = {
      ...config.module,
      rules: [...config.module.rules, ...webpackConfig.module.rules],
    };

    config.resolve.alias = {
      ...config.resolve.alias,
      ...webpackConfig.resolve.alias,
    };

    return config;
  },
};
