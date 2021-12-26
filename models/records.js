const Mongoose = require("mongoose");

const RecordSchema = new Mongoose.Schema(
  {
   _id:Mongoose.Types.ObjectId,
   key:String,
   createdAt:Date,
   counts:[Number],
   value:String
  }
);

module.exports = Mongoose.model("records", RecordSchema);
