const mongoose = require('mongoose');

const { Schema } = mongoose;

const productsSchema = new Schema({
  code: String,
  name: String,
  pathImg: String,
  price: String,
  description: String,
  stock: String,
  category: String,
  status: String,
});

module.exports = mongoose.model('products', productsSchema);
