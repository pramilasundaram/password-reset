const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
      },
      password: { type: String },
      token:{ type:String }
    },
    {
      timestamps: true,
    },
    
 
  );
  module.exports = mongoose.model("User", userSchema);