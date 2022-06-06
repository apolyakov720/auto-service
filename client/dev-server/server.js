const fs = require('fs');
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

app.use((req, res, next) => {
  if (process.env.USE_MOCK_API) {
    const { originalUrl } = req;
    const originalPath = originalUrl.substring(1).split('/');
    const directory = path.join(__dirname, `/${originalPath.shift()}/${originalPath.shift()}/`);
    const fileName = originalPath.join('-').concat('.json');
    const filePath = directory + fileName;

    if (fs.existsSync(directory)) {
      try {
        return res.json(JSON.parse(fs.readFileSync(filePath, 'utf8')));
      } catch (e) {
        return res.json({
          result: false,
          messages: [`Can't find file on ${filePath}`],
        });
      }
    }
  }

  next();
});

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

compilerInstance.waitUntilValid(() => {
  app.listen(devServerPort, () => {
    console.info(`Server running at ${devServerPort}\n`);
  });
});
