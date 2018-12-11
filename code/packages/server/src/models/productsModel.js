// import mongoose module
import mongoose from 'mongoose';

// get Schema from  mongoose module
const { Schema } = mongoose;

// create new schema
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
  isDelete: { type: Boolean, default: false },
});
productsSchema.index({ name: 'text', code: 'text' });

// export model
export default mongoose.model('products', productsSchema);
