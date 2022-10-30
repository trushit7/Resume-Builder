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

    if (result) {
      res.send("Login successful");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    const result = await userModel.create({
      username,
      password,
    });

    if (result) {
      res.send("Registration successful");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});
