const mongoose = require('mongoose');

const { Schema } = mongoose;

const usersSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  address: String,
  phonenumber: String,
  role: { type: String, default: 'user' },
  token: String,
  firstName: String,
  lastName: String,
  birthday: String,
});

module.exports = mongoose.model('users', usersSchema);
