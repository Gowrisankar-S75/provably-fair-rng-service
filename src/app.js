const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const rngRoutes = require("./routes/rng.routes");
const provablyFairRoutes = require("./routes/provablyFair.routes");
const verifyRoutes = require("./routes/verify.routes");

const rateLimiter = require("./middlewares/rateLimiter");
const errorHandler = require("./middlewares/errorHandler");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("../swagger/swagger");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use(rateLimiter);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);
app.use("/api/v1/rng", rngRoutes);
app.use("/api/v1/provably-fair", provablyFairRoutes);
app.use("/api/v1/verify", verifyRoutes);

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

app.use(errorHandler);

module.exports = app;