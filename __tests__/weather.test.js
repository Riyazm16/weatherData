const request = require("supertest");
const app = require("../main");

describe("Testing the Weather API ", () => {
  const endpoint = "/api/weather/";
  it("Should fetch Weather details", async (done) => {
    const response = await request(app).get(endpoint);
    expect(response.status).toEqual(200);
    expect(response.body).toHaveProperty("weather");
    done();
  });
});
