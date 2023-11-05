const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//category refers to what kind of product it is
//(tech, appliances, clothes, furniture, etc.)
//product is more specific(tech -> laptop,phone,etc)
//Structure of document
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    listings: {
      type: Array,
    },
  },
  { timestamps: true }
);

//Creates a model of the listing
module.exports = mongoose.model("User", userSchema);
