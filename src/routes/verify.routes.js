const express = require("express");

const router = express.Router();

const {
  verify,
} = require("../controllers/verify.controller");

/**
 * @swagger
 * /api/v1/verify:
 *   post:
 *     summary: Verify a provably fair result
 *     tags:
 *       - Verification
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - serverSeed
 *               - clientSeed
 *               - nonce
 *             properties:
 *               serverSeed:
 *                 type: string
 *               clientSeed:
 *                 type: string
 *               nonce:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Verification successful
 *       400:
 *         description: Invalid request
 */
router.post("/", verify);

module.exports = router;