# Provably Fair RNG Service

A cryptographically secure random number generation microservice built with Node.js and Express.

## Features

* Secure random number generation using Node.js Crypto
* Provably Fair algorithm using SHA-256 hashing
* Verification endpoint
* Rate limiting
* Swagger/OpenAPI documentation
* Health check endpoint
* Global error handling
* Docker support

## API Endpoints

### Health Check

GET /health

### Random Number

GET /api/v1/rng/random

### Provably Fair Generation

POST /api/v1/provably-fair

### Verification

POST /api/v1/verify

## Tech Stack

* Node.js
* Express.js
* Crypto
* Swagger
* Docker
* Jest
* Supertest

## Run Locally

```bash
npm install
npm run dev
```

## Docker

```bash
docker build -t provably-fair-rng .
docker run -p 3000:3000 provably-fair-rng
```
## Live Demo

* API: https://provably-fair-rng-service-3.onrender.com
* Swagger Docs: https://provably-fair-rng-service-3.onrender.com/api-docs
* Health Check: https://provably-fair-rng-service-3.onrender.com/health
