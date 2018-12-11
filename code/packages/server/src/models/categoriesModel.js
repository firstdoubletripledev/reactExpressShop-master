// import mongoose module
import mongoose from 'mongoose';

// get Schema from  mongoose module
const { Schema } = mongoose;

// create new schema
const categoriesSchema = new Schema({
  name: String,
  value: String,
  products: { type: [{ type: Schema.Types.ObjectId, ref: 'products' }] },
});

// export model
export default mongoose.model('categories', categoriesSchema);
