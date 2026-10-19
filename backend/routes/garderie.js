const express = require("express");
const { garderie } = require("../data/data");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(garderie);
});

module.exports = router;
