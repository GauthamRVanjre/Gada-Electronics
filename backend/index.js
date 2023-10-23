import express from "express";
import mongoose from "mongoose";
import { DATABASE_URL, PORT } from "./config.js";
import productRoute from "./routes/productRoute.js";

const app = express();
app.use(express.json());

app.use("/products", productRoute);

mongoose
  .connect(DATABASE_URL)
  .then(() => {
    console.log("connected to DB");
    app.listen(PORT, () => {
      console.log("server running");
    });
  })
  .catch((err) => {
    console.log(`${err}`);
  });
