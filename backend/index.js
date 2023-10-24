import express from "express";
import mongoose from "mongoose";
import { DATABASE_URL, PORT } from "./config.js";
import productRoute from "./routes/productRoute.js";
import cors from "cors";

const app = express();
app.use(express.json());

// allow react app to access the APIs
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

// allow express to navigate to products route
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
