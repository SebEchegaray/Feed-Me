const express = require("express");
const axios = require("axios");

const router = express.Router();

// Search Spoonacular Ingredients API
router.post("/ingredients", function (req, res) {
  const query = req.body.query;
  const api_key = process.env.SPOONACULAR_API_KEY;

  axios
    .get(
      `https://api.spoonacular.com/food/ingredients/search?query=${query}&apiKey=${api_key}`
    )
    .then((response) => {
      const result = response.data.results;
      res.json(result);
    });
});

module.exports = router;
