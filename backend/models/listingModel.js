const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//category refers to what kind of product it is
//(tech, appliances, clothes, furniture, etc.)
//product is more specific(tech -> laptop,phone,etc)
//Structure of document
const listingSchema = new Schema(
  {
    itemName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    product: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    condition: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    views: {
      type: Number,
    },
    //This will be the unique id of the user
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//Creates a model of the listing
module.exports = mongoose.model("Listing", listingSchema);
