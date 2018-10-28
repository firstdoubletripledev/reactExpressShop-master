import mongoose from 'mongoose';

const { Schema } = mongoose;

const shopSchema = new Schema({
  name: String,
  slogan: String,
  address: String,
  phonenumber: String,
  facebook: String,
  instagram: String,
  twitter: String,
});

export default mongoose.model('shop', shopSchema);
