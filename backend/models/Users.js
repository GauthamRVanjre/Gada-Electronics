import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  address: {
    type: String,
    required: false,
    default: "",
  },
  password: String,
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.plugin(passportLocalMongoose);

export const User = mongoose.model("User", userSchema);
