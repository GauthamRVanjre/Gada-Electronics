// routes/orders.js

import express from "express";
import { Order } from "../models/Orders.js";
import { product } from "../models/Products.js";

const router = express.Router();

// Get all orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user")
      .populate({
        path: "orderItems",
        populate: { path: "Products" },
      });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new order
router.post("/", async (req, res) => {
  const order = new Order({
    user: req.body.user,
    totalAmount: req.body.totalAmount,
    orderItems: req.body.orderItems,
  });

  try {
    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
