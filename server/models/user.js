const { Schema, model } = require('mongoose');

const User = new Schema({
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: String,
  creationDate: { type: Date, default: Date.now() }
});

module.exports = model('User', User);