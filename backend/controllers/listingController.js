const Listing = require("../models/listingModel");
const mongoose = require("mongoose");
//Get all listings
const getListings = async (req, res) => {
  const listings = await Listing.find({}).sort({ createdAt: -1 });

  res.status(200).json(listings);
};

//Get a single listing
const getSingleListing = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such listing" });
  }

  const listing = await Listing.findById(id);

  if (!listing) {
    return res.status(404).json({ error: "No such listing" });
  }

  res.status(200).json(listing);
};

//Create a new listing
const createListing = async (req, res) => {
  const {
    itemName,
    description,
    category,
    product,
    price,
    condition,
    views,
    user,
  } = req.body;

  //Add document to database
  try {
    const listing = await Listing.create({
      itemName,
      description,
      category,
      product,
      price,
      condition,
      views,
      user,
    });
    res.status(200).json(listing);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Delete a listing
const deleteListing = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such listing" });
  }

  const listing = await Listing.findOneAndDelete({ _id: id });

  if (!listing) {
    return res.status(400).json({ error: "No such lisitng" });
  }

  res.status(200).json(listing);
};

//Update a listing
const updateListing = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such listing" });
  }

  //Parses the json file we send in to update the existing listing
  const listing = await Listing.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!listing) {
    return res.status(400).json({ error: "No such lisitng" });
  }

  res.status(200).json(listing);
};

module.exports = {
  createListing,
  getListings,
  getSingleListing,
  deleteListing,
  updateListing,
};
