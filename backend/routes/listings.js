const express = require("express");
const router = express.Router();

const {
  createListing,
  getListings,
  getSingleListing,
  deleteListing,
  updateListing,
} = require("../controllers/listingController");

//GET all the listings
router.get("/", getListings);

//GET single listing
router.get("/:id", getSingleListing);

//POST a new listing
router.post("/", createListing);

//DELETE a lisitng
router.delete("/:id", deleteListing);

//UPDATE a listing
router.patch("/:id", updateListing);
module.exports = router;
