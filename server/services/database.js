const mongoose = require('mongoose');
const config = require('config');

const databaseConfiguration = config.get('database');

class Database {
  connection = mongoose.connection;
  configuration = null;

  constructor(configuration) {
    try {
      this.configuration = {
        protocol: "mongodb:",
        hostname: "localhost",
        port: "27017",
        ...configuration
      };

      this.connection
        .on('connected', () => {
          console.info('Database is connected successfully');
        })
        .on('disconnected', () => {
          console.info('Database is disconnected successfully');
        })
        .on('error', (error) => {
          console.error(`An error occurred while the database was running: ${error}`);
        })
    } catch (error) {
      // logger
    }
  }

  async connect() {
    try {
      const { protocol, hostname, port, name } = this.configuration;

      if (!name) {
        throw new Error('Invalid database name');
      }

      await mongoose.connect(`${protocol}//${hostname}:${port}`, {
        dbName: name,
        serverSelectionTimeoutMS: 5000
      });
    } catch(error) {
      throw new Error(error);
    }
  }
};

module.exports = new Database(databaseConfiguration);
