const mongoose = require('mongoose');

const { Schema } = mongoose;

const categoriesSchema = new Schema({
  name: String,
  value: String,
});

module.exports = mongoose.model('categories', categoriesSchema);
