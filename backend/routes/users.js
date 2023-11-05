const express = require("express");
const router = express.Router();

const {
  createUser,
  getUsers,
  getSingleUser,
  deleteUser,
  updateUser,
} = require("../controllers/userController");

//GET all the listings
router.get("/", getUsers);

//GET single listing
router.get("/:id", getSingleUser);

//POST a new listing
router.post("/", createUser);

//DELETE a lisitng
router.delete("/:id", deleteUser);

//UPDATE a listing
router.patch("/:id", updateUser);
module.exports = router;
