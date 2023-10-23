import express from "express";
import mongoose from "mongoose";
import { DATABASE_URL, PORT } from "./config.js";

const app = express();

// app.get("/", (req, res) => {
//   return res.status(200).send(`Port running on ${PORT}`);
// });

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
