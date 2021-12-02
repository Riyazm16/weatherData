exports.responseCodes = {
  success: 200,
  bad_request: 400,
  not_found: 404,
  internal_server_error: 500,
  unable_to_process: 422,
};
exports.commonResponse = {
  endpoint_not_found: "Endpoint not found",
  internal_server_error_msg: "Internal server error",
};
exports.utilityConstants = {
  weatherApi: {
    status: ["active", "inactive"],
    default_status: "active",
    weather_api_base_url: "api.openweathermap.org/data/2.5/weather",
    default_city: "London",
    default_country: "uk",
    messages: {
      api_error: "Unable to fetch data",
      not_prime_num: "Date is not prime so no data",
    },
  },
};
