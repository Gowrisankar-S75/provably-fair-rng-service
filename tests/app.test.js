const request = require("supertest");
const app = require("../src/app");

describe("Health Check", () => {
  test("GET /health should return UP", async () => {
    const res = await request(app).get("/health");

    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("UP");
  });
});

describe("Random Number API", () => {
  test("GET /api/v1/rng/random", async () => {
    const res = await request(app)
      .get("/api/v1/rng/random");

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
  });
});

describe("Provably Fair API", () => {
  test("POST /api/v1/provably-fair", async () => {
    const res = await request(app)
      .post("/api/v1/provably-fair")
      .send({
        clientSeed: "gowri123",
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
  });
});