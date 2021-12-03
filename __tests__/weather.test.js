const request = require("supertest");
const app = require("../main");
const { isPrime } = require("../helper/commonHelper");

describe("Testing the Weather API ", () => {
  const endpoint = "/api/weather/";
  const primeNumCheck = isPrime(new Date().getDate());
  let primeDayResponse = 200;
  let checkProperty = "weather";
  if (!primeNumCheck) {
    primeDayResponse = 404;
    checkProperty = "errors";
  }
  it("Should fetch Weather details", async (done) => {
    const response = await request(app)
      .get(endpoint)
      .query({ city: "mumbai", country: "in" });
    expect(response.status).toEqual(primeDayResponse);
    expect(response.body).toHaveProperty(checkProperty);
    done();
  });

  it("Should throw not found error", async (done) => {
    const response = await request(app)
      .get(endpoint)
      .query({ city: "mumbaixyz", country: "in" });
    expect(response.status).toEqual(404);
    done();
  });
});
