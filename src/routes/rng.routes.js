const express = require("express");
const router = express.Router();

const { getRandomNumber } = require("../controllers/rng.controller");

router.get("/random", getRandomNumber);

module.exports = router;