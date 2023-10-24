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

    if (typeof quantity !== "number" && typeof price !== "number") {
      return res
        .status(405)
        .json({ error: "quantity and price are numeric fields" });
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

// GET request
/* The code block `router.get("/", async (req, res) => { ... })` is defining a route handler for a GET
request to the root URL ("/") of the server. */
router.get("/", async (req, res) => {
  try {
    /* `const products = await product.find({});` is querying the database to find all products. */
    const products = await product.find(
      {},
      { name: 1, price: 1, image: 1, quantity: 1 }
    );

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Server error, could not get products" });
  }
});

// PUT request
/* The code block `router.put("/:id", async (req, res) => { ... })` is defining a route handler for a
PUT request to the URL "/:id" of the server. This route is used to update a specific product in the
database. */
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const productId = await product.findByIdAndUpdate(id, req.body);

    if (!productId) {
      res.status(404).json({ error: "could not find product" });
    }

    res.status(200).json(productId);
  } catch (error) {
    res.status(500).json({ error: "Server error, could not update products" });
  }
});

/* The code block `router.delete("/:id", async (req, res) => { ... })` is defining a route handler for
a DELETE request to the URL "/:id" of the server. This route is used to delete a specific product
from the database. */
// Delete api endpoint
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteProduct = product.findByIdAndDelete(id);

    if (!deleteProduct) {
      res.status(404).json({ error: "could not find product" });
    }

    res.status(200).json({ message: "product deleted" });
  } catch (error) {
    res.status(500).json({ error: "Server error, could not update products" });
  }
});

export default router;
