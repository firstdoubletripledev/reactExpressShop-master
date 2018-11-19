const mongoose = require('mongoose');

const { Schema } = mongoose;

const productsSchema = new Schema({
  code: String,
  name: String,
  pathImg: String,
  price: String,
  description: String,
  stock: String,
  category: {
    type: [{ type: Schema.Types.ObjectId, ref: 'categories' }],
    default: ['5be66519f241d74b4728e2ce'],
  },
  status: String,
  galleryImage: [String],
  discountPrice: String,
});
productsSchema.index({ name: 'text', code: 'text' });

module.exports = mongoose.model('products', productsSchema);
