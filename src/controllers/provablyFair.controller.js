const {
  generateProvablyFairResult,
} = require("../services/provablyFair.service");

function generateResult(req, res) {
  const { clientSeed } = req.body;

  if (!clientSeed) {
    return res.status(400).json({
      success: false,
      message: "clientSeed is required",
    });
  }

  const result = generateProvablyFairResult(clientSeed);

  return res.status(200).json({
    success: true,
    ...result,
  });
}

module.exports = {
  generateResult,
};