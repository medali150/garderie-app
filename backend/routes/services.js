const express = require("express");
const { services } = require("../data/data");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(services);
});

module.exports = router;
