require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const listingRoutes = require("./routes/listings");
const userRoutes = require("./routes/users");
//express app
const app = express();

//middleware

// Enable CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

//Any request that comes in is parsed and stored in req
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/listings", listingRoutes);
app.use("/api/users", userRoutes);



//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests (should be using .env)
    app.listen(4000, () => {
      console.log("connected to db and listening on port 4000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
