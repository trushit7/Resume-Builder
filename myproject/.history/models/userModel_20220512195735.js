const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      default: "",
    },
    lastName: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      default: "",
    },
    mobileNumber: {
      type: Number,
      default: "",
    },
    objective: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
    portfolio: {
      type: String,
      default: "",
    },
    education: [],
    skills: [],
    experience: [],
    projects: [],
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
