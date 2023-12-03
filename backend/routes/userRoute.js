import express from "express";
import { User } from "../models/Users.js";
import passport from "passport";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password, adminCode, email } = req.body;

  // Check if the registration includes an admin code
  const isAdmin = adminCode === "admin";

  try {
    await User.register(new User({ username, isAdmin, email }), password);

    passport.authenticate("local")(req, res, () => {
      return res.status(200).send({ message: "User is registered." });
    });
  } catch (err) {
    console.error(err);

    if (err.name === "UserExistsError") {
      return res
        .status(409)
        .send({ message: "User with the same name already exists." });
    }

    return res.status(500).send({ message: "Internal Server Error." });
  }
});

// login route
router.post("/login", passport.authenticate("local"), (req, res) => {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.

  // You can store user information in the session if needed
  req.session.user = {
    id: req.user._id,
    username: req.user.username,
    isAdmin: req.user.isAdmin,
    email: req.user.email,
    address: req.user.address,
  };

  // Return a JSON response indicating successful login
  return res
    .status(200)
    .json({ message: "Login successful", user: req.session.user });
});

router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error during logout", error: err });
    }
    return res.status(200).json({ message: "user logged out" });
  });
});

export default router;
