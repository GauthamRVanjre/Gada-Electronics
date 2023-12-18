// routes/orderItems.js

import express from "express";
import { OrderItem } from "../models/OrderItems.js";

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
  const orderItem = new OrderItem({
    order: req.body.order,
    product: req.body.product,
    quantity: req.body.quantity,
    subtotal: req.body.subtotal,
  });

  try {
    const newOrderItem = await orderItem.save();
    res.status(201).json(newOrderItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
