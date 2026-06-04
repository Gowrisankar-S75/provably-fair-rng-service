const crypto = require("crypto");

function generateRandomNumber(min = 0, max = 100) {
  return crypto.randomInt(min, max + 1);
}

module.exports = {
  generateRandomNumber,
};