import mongoose from "mongoose";

/* The code is defining a Mongoose schema for a product. A schema is a blueprint for defining the
structure of a document in a MongoDB collection. */
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String, // You can use a String to store the file path or image URL
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
});

export const product = mongoose.model("product", productSchema);
