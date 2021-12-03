const { errorHandler } = require("../common/errorHandler");
const superagent = require("superagent");
const { isPrime } = require("../helper/commonHelper");
const { addApiResponse } = require("../orm/weather");
const { setResponse } = require("../common/responseHandler");
const {
  responseCodes,
  utilityConstants,
} = require("../constants/commonConstants");

/**
 * Create item function called by route
 */
const getWeather = async (req, res) => {
  try {
    const primeNumCheck = isPrime(new Date().getDate());
    if (!primeNumCheck) {
      throw setResponse(
        responseCodes.not_found,
        utilityConstants.weatherApi.messages.not_prime_num
      );
    }
    const apiUrl = utilityConstants.weatherApi.weather_api_base_url;
    superagent
      .get(apiUrl)
      .query(
        `q=${req.query.city},${req.query.country}&appid=${process.env.WEATHER_API_KEY}`
      )
      .set("accept", "json")
      .then(async (response) => {
        if (response.statusCode === responseCodes.success) {
          const apiData = {
            open_weather_api_response: response.body,
            open_weather_api_request_date: new Date(),
            app_response_sent_date: new Date(),
          };
          await addApiResponse(apiData);
          return res.status(responseCodes.success).json(response.body);
        }
      })
      .catch((err) => {
        return res.status(err.response.statusCode).json(err.response.body);
      });
  } catch (error) {
    errorHandler(res, error);
  }
};

module.exports = {
  getWeather,
};
