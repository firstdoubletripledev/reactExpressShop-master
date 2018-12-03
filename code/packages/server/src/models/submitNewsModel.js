// import mongoose module
const mongoose = require('mongoose');

// get Schema from  mongoose module
const { Schema } = mongoose;

// create new schema
const submitNewsSchema = new Schema({
  email: { type: String },
  ip: { type: String },
});

// export model
export default mongoose.model('submitNews', submitNewsSchema);
