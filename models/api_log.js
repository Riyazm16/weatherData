const mongoose = require("mongoose");
const { api_log } = require("../constants/collections");
const { utilityConstants } = require("../constants/commonConstants");

const apiLogSchema = new mongoose.Schema(
  {
    open_weather_api_response: {
      type: [],
      required: true,
      default: [],
    },
    open_weather_api_request_date: {
      type: Date,
      required: true,
      default: null,
    },
    status: {
      type: String,
      default: utilityConstants.weatherApi.default_status,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model(
  api_log.model,
  apiLogSchema,
  api_log.collection
);
