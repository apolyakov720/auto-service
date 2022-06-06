const constants = require('../constants');
const loginRoute = require('./login');

const routes = [
  loginRoute,
];

const mapRoute = (app) => {
  routes.forEach((route) => {
    app.use(constants.api.PREFIX, route);
  });
};

module.exports = mapRoute;