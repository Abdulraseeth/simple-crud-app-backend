const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import cors
const productRoute = require("./routes/product.route.js");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api", productRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to database!");
    app.listen(3001, () => {
      console.log("Server is running on port 3001");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
