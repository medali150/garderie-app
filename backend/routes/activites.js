const express = require("express");
const { activites } = require("../data/data");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(activites);
});

module.exports = router;
