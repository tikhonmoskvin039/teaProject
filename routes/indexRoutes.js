const { response } = require("express");
const express = require("express");
const route = express.Router();

const { User } = require("../db/models");

route.get("/", (req, res) => {
  res.redirect("/teas");
});

route.post("/", async (req, res) => {
  const { email } = req.body;
  try {
    const newAdmin = await User.findOne({ where: { email: email } });
    newAdmin.isAdmin = true;
    newAdmin.save();
    res.redirect("/private/admin");
  } catch (err) {
    console.log(err);
  }
});

module.exports = route;
