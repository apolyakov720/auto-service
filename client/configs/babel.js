module.exports = {
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: '3.19.2',
      },
    ],
  ],
  plugins: ['@babel/plugin-transform-runtime'],
};
