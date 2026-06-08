const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Provably Fair RNG API",
      version: "1.0.0",
      description: "Cryptographically secure RNG microservice",
    },
    servers: [
  {
    url:
      process.env.NODE_ENV === "production"
        ? "https://provably-fair-rng-service-3.onrender.com"
        : "http://localhost:3000",
  },
],
  },
  apis: [
  "./src/routes/*.js",
  "./src/app.js"
]
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;