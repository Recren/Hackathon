const express = require("express");
const Listing = require("../models/listingModel");
const router = express.Router();

//GET all the listings
router.get("/", (req, res) => {
  res.json({ mssg: "GET all listings" });
});

//GET single listing
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single listing" });
});

//POST a new listing
router.post("/", async (req, res) => {
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
});

//DELETE a lisitng
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a listing" });
});

//UPDATE a listing
router.patch("/:id", (req, res) => {
  res.json({ mssg: "Update a listing" });
});
module.exports = router;
