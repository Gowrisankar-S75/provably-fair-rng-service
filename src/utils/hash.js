const crypto = require("crypto");

function generateSeed() {
  return crypto.randomBytes(32).toString("hex");
}

function hashSeed(seed) {
  return crypto
    .createHash("sha256")
    .update(seed)
    .digest("hex");
}

module.exports = {
  generateSeed,
  hashSeed,
};