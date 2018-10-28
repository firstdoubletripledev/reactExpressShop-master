const mongoose = require('mongoose');

const { Schema } = mongoose;

const categoriesSchema = new Schema({
  name: String,
});

module.exports = mongoose.model('categories', categoriesSchema);
