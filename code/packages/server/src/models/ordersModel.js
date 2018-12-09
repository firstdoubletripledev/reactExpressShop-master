// import mongoose module
import mongoose from 'mongoose';

// get Schema from  mongoose module
const { Schema } = mongoose;

// create new schema
const ordersSchema = new Schema({
  code: String,
  createdate: String,
  status: String,
  user: { type: Schema.Types.ObjectId, ref: 'users' },
  firstName: String,
  lastName: String,
  addressShip: String,
  phoneNumberShip: String,
  cart: Object,
});

// export model
export default mongoose.model('orders', ordersSchema);
