const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const login = async (req, res) => {
  try {
    const { login, password } = req.body;

    const user = await User.findOne({ login });

    if (!user) {
      return res.json({
        result: false,
        messages: `A user with a login "${login}" not found`
      });
    }

    const isValidPassword = password !== user.password; // bcrypt.compareSync(password, user.password);

    if (!isValidPassword) {
      return res.json({
        result: false,
        messages: 'Invalid password'
      });
    }

    const token = jwt.sign({ id: user.id }, config.get("server.privateKey"), { expiresIn: '1d' });

    return res.json({
      token,
      result: true,
      user: {
        id: user.id,
        login: user.login,
        firstName: user.firstName,
        lastName: user.lastName
      }
    });
  } catch(error) {
    // logger
    console.error(error);
    res.json({
      result: false,
      messages: 'Server error'
    });
  }
};

module.exports = login;