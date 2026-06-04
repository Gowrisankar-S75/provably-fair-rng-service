const crypto = require("crypto");
const { generateSeed, hashSeed } = require("../utils/hash");

function generateProvablyFairResult(clientSeed) {
  const serverSeed = generateSeed();

  const nonce = 1;

  const hash = crypto
    .createHash("sha256")
    .update(`${serverSeed}:${clientSeed}:${nonce}`)
    .digest("hex");

  const result = parseInt(hash.substring(0, 8), 16) % 100 + 1;

  return {
    serverSeed,
    serverSeedHash: hashSeed(serverSeed),
    clientSeed,
    nonce,
    result,
  };
}

function verifyResult(serverSeed, clientSeed, nonce) {
  const hash = crypto
    .createHash("sha256")
    .update(`${serverSeed}:${clientSeed}:${nonce}`)
    .digest("hex");

  const result =
    parseInt(hash.substring(0, 8), 16) % 100 + 1;

  return {
    hash,
    result,
  };
}

module.exports = {
  generateProvablyFairResult,
  verifyResult
};