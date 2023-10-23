import express from "express";
import { product } from "../models/Products.js";

const router = express.Router();

// POST request to create a new product
/* The code block `router.post("/", async (req, res) => { ... })` is defining a route handler for a
POST request to the root URL ("/") of the server. */
router.post("/", async (req, res) => {
  try {
    /* This code block is handling a POST request to create a new product. */
    const { name, quantity, price, image, description } = req.body;

    // Check if required fields (name, quantity, price) are provided
    if (!name || !quantity || !price) {
      return res
        .status(400)
        .json({ error: "Name, quantity, and price are required fields" });
    }

    // Create a new product object
    const newProduct = {
      name,
      quantity,
      price,
      image,
      description,
    };

    // Save the product to the database
    const savedProduct = await product.create(newProduct);

    res.status(200).json(savedProduct); // Respond with the saved product
  } catch (error) {
    res.status(500).json({ error: "Server error, product not saved" });
  }
});

export default router;
