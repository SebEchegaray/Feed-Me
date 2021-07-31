const express = require("express");
const User = require("../models/user");
const validateUser = require("../middlewares/user/validate_user");

const router = express.Router();

//All routes realtive to /api/users specified in server.js
// Only runs validateUser here
router.post("/", validateUser, (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  // User.create returns a promise
  User.create(name, email, password).then((user) => {
    res.json({
      message: "User created succesfully",
      user: user,
    });
  });
});

module.exports = router;
