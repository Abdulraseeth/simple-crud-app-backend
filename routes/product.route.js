const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

router.get("/products", getProducts);
router.get("/products/:id", getProduct);

router.post("/products", createProduct);

// update a product
router.put("/products/:id", updateProduct);

// delete a product
router.delete("/products/:id", deleteProduct);

module.exports = router;
