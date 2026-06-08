
/**
 * @swagger
 * /api/v1/rng/random:
 *   get:
 *     summary: Generate a cryptographically secure random number
 *     tags:
 *       - RNG
 *     parameters:
 *       - in: query
 *         name: min
 *         schema:
 *           type: integer
 *       - in: query
 *         name: max
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Random number generated successfully
 */

const express = require("express");
const router = express.Router();

const { getRandomNumber } = require("../controllers/rng.controller");

router.get("/random", getRandomNumber);

module.exports = router;