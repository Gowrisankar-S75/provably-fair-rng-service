const {
  verifyResult,
} = require("../services/provablyFair.service");

function verify(req, res) {
     if (!req.body) {
    return res.status(400).json({
      success: false,
      message: "Request body missing",
    });
  }
  const {
    serverSeed,
    clientSeed,
    nonce,
  } = req.body;

  if (
    !serverSeed ||
    !clientSeed ||
    nonce === undefined
  ) {
    return res.status(400).json({
      success: false,
      message: "Missing required fields",
    });
  }

  const result = verifyResult(
    serverSeed,
    clientSeed,
    nonce
  );

  return res.status(200).json({
    success: true,
    ...result,
  });
}

module.exports = {
  verify,
};