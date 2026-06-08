
const express = require("express");

const router = express.Router();

const {
  generateResult,
} = require("../controllers/provablyFair.controller");

/**
 * @swagger
 * /api/v1/provably-fair:
 *   post:
 *     summary: Generate a provably fair random result
 *     tags:
 *       - Provably Fair
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - clientSeed
 *             properties:
 *               clientSeed:
 *                 type: string
 *                 example: gowri123
 *     responses:
 *       200:
 *         description: Provably fair result generated
 *       400:
 *         description: Invalid request
 */

router.post("/", generateResult);

module.exports = router;