const express = require("express");

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
router.post("/", (req, res) => {
  res.json({ mssg: "POST a new listing" });
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
