const mongoose = require('mongoose');

const { Schema } = mongoose;

const submitNewsSchema = new Schema({
  email: { type: String },
  ip: { type: String }
});

module.exports = mongoose.model('submitNews', submitNewsSchema);
