const { generateRandomNumber } = require("../services/rng.service");

function getRandomNumber(req, res) {
  const min = Number(req.query.min) || 0;
  const max = Number(req.query.max) || 100;

  if (min > max) {
    return res.status(400).json({
      success: false,
      message: "min cannot be greater than max",
    });
  }

  const randomNumber = generateRandomNumber(min, max);

  return res.status(200).json({
    success: true,
    randomNumber,
    range: {
      min,
      max,
    },
  });
}

module.exports = {
  getRandomNumber,
};