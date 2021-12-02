const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "My weather API",
    description: "weather info",
  },
  host: "localhost:3000/api",
  schemes: ["http"],
  definitions: {
    api_log: {
      open_weather_api_response: { type: "array" },
      status: { type: "string", enum: ["active", "inactive"] },
      open_weather_api_request_date: { type: "string", format: "date-time" },
      _id: { type: "string" },
      updatedAt: { type: "string", format: "date-time" },
      createdAt: { type: "string", format: "date-time" },
    },
  },
};

const outputFile = "swagger-api-doc.json";
const endpointsFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
