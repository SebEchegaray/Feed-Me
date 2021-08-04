const express = require("express");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const router = express.Router();

// Login
router.post("/", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findByEmail(email).then((user) => {
    if (user && bcrypt.compareSync(password, user.password_digest)) {
      req.session.userId = user.id;
      res.json(req.session);
    } else {
      res.status(401).json({ error: "No user found or incorrect password" });
    }
  });
});

// Logout
router.delete("/", (req, res) => {
  req.session.destroy();
  res.json({ msg: "User successfully logged out." });
});

// Get current session
router.get("/", (req, res) => {
  res.json(req.session);
});

module.exports = router;
