const express = require("express");
const User = require("../models/user");
const router = express.Router();

// Create
router.post("/", (req, res) => {
  res.json({ msg: "Create recipe" });
});

// Get Recipe
router.get("/", (req, res) => {
  res.json({ msg: "Get recipe" });
});

// Update
router.put("/", (req, res) => {
  res.json({ msg: "Update recipe" });
});

// Delete recipe
router.delete("/", (req, res) => {
  res.json({ msg: "Delete recipe" });
});

module.exports = router;
