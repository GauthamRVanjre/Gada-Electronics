import express from "express";
import mongoose from "mongoose";
import productRoute from "./routes/productRoute.js";
import userRoute from "./routes/userRoute.js";
import session from "express-session";
import orderRoute from "./routes/orders.js";
import orderItemsRoute from "./routes/orderItems.js";
import cors from "cors";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { User } from "./models/Users.js";
import "dotenv/config";

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

app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// allow express to navigate to products route
app.use("/products", productRoute);

app.use("/users", userRoute);

app.use("/orders", orderRoute);

app.use("/orderItems", orderItemsRoute);

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("connected to DB");
    app.listen(process.env.PORT, () => {
      console.log("server running");
    });
  })
  .catch((err) => {
    console.log(`${err}`);
  });
