const express = require('express');
const router = express.Router();
const constants = require('../constants');

const loginController = require('../controllers/login');

router.post(constants.api.LOGIN_PATH, loginController);

module.exports = router;

