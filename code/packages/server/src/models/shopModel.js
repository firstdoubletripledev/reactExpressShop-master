// import mongoose module
const mongoose = require('mongoose');

// get Schema from  mongoose module
const { Schema } = mongoose;

// create new schema
const shopSchema = new Schema({
  name: String,
  slogan: String,
  address: String,
  phonenumber: String,
  facebook: String,
  instagram: String,
  twitter: String,
});

// export model
export default mongoose.model('shop', shopSchema);
