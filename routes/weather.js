const express = require("express");
const weatherRouter = express.Router();
const { getWeather } = require("../controllers/weather");
const { validateWeather } = require("../validators/weather");
const trimRequest = require("trim-request");

weatherRouter.get("/", [trimRequest.all,validateWeather, getWeather]);

module.exports = weatherRouter;
