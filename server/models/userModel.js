const mongoose = require("mongoose");

//Schema  for the data base it defined the stucture of the document
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    age: {
      type: Number,
    },
  },
  { timestamps: true }
);
// Create a model based on the schema it helps to perform operation curd
const user = mongoose.model("User", userSchema);
module.exports = user;
