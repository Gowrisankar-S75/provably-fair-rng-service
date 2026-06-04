const express = require("express");

const router = express.Router();

const {
  generateResult,
} = require("../controllers/provablyFair.controller");

router.post("/", generateResult);

module.exports = router;