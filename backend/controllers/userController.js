const User = require("../models/userModel");
const mongoose = require("mongoose");
//Get all User
const getUsers = async (req, res) => {
  const users = await User.find({}).sort({ createdAt: -1 });

  res.status(200).json(users);
};

//Get a single User
const getSingleUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such user" });
  }
  const user = await User.findById(id);

  if (!user) {
    return res.status(404).json({ error: "No such User" });
  }

  res.status(200).json(user);
};
//Create a new User
const createUser = async (req, res) => {
  const { email, firstName, lastName, password, listings } = req.body;

  //Add document to database
  try {
    const user = await User.create({
      email,
      firstName,
      lastName,
      password,
      listings,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Delete a user
const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such user" });
  }

  const user = await User.findOneAndDelete({ _id: id });

  if (!user) {
    return res.status(400).json({ error: "No such user" });
  }

  res.status(200).json(user);
};

//Update a listing
const updateUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such user" });
  }

  //Parses the json file we send in to update the existing listing
  const user = await User.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!user) {
    return res.status(400).json({ error: "No such user" });
  }

  res.status(200).json(listing);
};

module.exports = {
  createUser,
  getUsers,
  getSingleUser,
  deleteUser,
  updateUser,
};
