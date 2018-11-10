const mongoose = require('mongoose');

const { Schema } = mongoose;

const categoriesSchema = new Schema({
  name: String,
  value: String,
  products: { type: [{ type: Schema.Types.ObjectId, ref: 'products' }] },
});

module.exports = mongoose.model('categories', categoriesSchema);
