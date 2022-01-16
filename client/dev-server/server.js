const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../configs/webpack');

const app = express();
const compiler = webpack(webpackConfig);
const compilerInstance = webpackDevMiddleware(compiler);
const devServerPort = process.env.DEV_SERVER_PORT || 3000;

app.disable('x-powered-by');

app.use(compilerInstance);

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

compilerInstance.waitUntilValid(() => {
  app.listen(devServerPort, () => {
    console.info(`Server running at ${devServerPort}\n`);
  });
});
