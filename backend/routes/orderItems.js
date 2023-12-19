// routes/orderItems.js

import express from "express";
import { OrderItem } from "../models/OrderItems.js";
import { product } from "../models/Products.js";

const router = express.Router();
// Get all order items
router.get("/", async (req, res) => {
  try {
    const orderItems = await OrderItem.find()
      .populate("order")
      .populate("product"); // Populate order and product details
    res.json(orderItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new order item
router.post("/", async (req, res) => {
  // Check if there is enough stock for the ordered quantity
  try {
    const orderItemsData = req.body;
    const orderItemsIds = [];

    // Iterate over the array of order items and process each one
    for (const orderItemData of orderItemsData) {
      // Check if there is enough stock for the ordered quantity
      const productAvailability = await product.findById(orderItemData.product);
      if (
        !productAvailability ||
        productAvailability.quantity < orderItemData.quantity
      ) {
        return res
          .status(400)
          .json({ message: "Not enough stock for the ordered quantity." });
      }

      // Create a new OrderItem
      const orderItem = new OrderItem({
        product: orderItemData.product,
        quantity: orderItemData.quantity,
        subtotal: orderItemData.subtotal,
      });

      // Save the new OrderItem
      const orderItemId = await orderItem.save();

      orderItemsIds.push(orderItemId._id);

      // Update the product stock
      await product.findByIdAndUpdate(orderItemData.product, {
        $inc: { quantity: -orderItemData.quantity },
      });
    }

    res.status(201).json(orderItemsIds);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
