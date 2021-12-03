const { query } = require("express-validator");
const { validateResult } = require("../common/responseHandler");
const { utilityConstants } = require("../constants/commonConstants");

/**
 * Validates weather api
 */
const validateWeather = [
  query("country")
    .exists()
    .not()
    .isEmpty()
    .isLength({
      min: 2,
      max: 2,
    })
    .withMessage(utilityConstants.weatherApi.messages.country_code_length),
  query("city")
    .exists()
    .not()
    .isEmpty()
    .withMessage(utilityConstants.weatherApi.messages.invalid_city),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = {
  validateWeather,
};
