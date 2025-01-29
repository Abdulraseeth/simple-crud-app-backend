const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import cors
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api", productRoute);

mongoose
  .connect(
    "mongodb+srv://abdulraseeth04:4djyXUKOgj2eOcTC@backenddb.j30zj.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3001, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
