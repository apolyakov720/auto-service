const express = require('express');
const config = require('config');
const database = require('./services/database');
const mapAppRoute = require('./routes');

const serverPort = config.get('server.port') || 9090;

const app = express();

app.use(express.json());

mapAppRoute(app);

const startApp = async () => {
  try {
    await database.connect();

    app.listen(serverPort, () => {
      console.info(`Server running at ${serverPort}`);
    });
  } catch(e) {
    // logger
  }
};

startApp();