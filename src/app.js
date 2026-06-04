const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    service: "Provably Fair RNG Service",
    version: "1.0.0"
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    timestamp: new Date().toISOString()
  });
});

module.exports = app;