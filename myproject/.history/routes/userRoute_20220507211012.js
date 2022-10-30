const express = require("express");
const userModel = require("../models/userModel");

const app = express();

const router = app.router;

router.get("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const result = await userModel.findOne({
      username,
      password,
    });

    res.send("Login");
  } catch (error) {}
});
