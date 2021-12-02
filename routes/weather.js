const express = require("express");
const userRouter = express.Router();
const { getWeather } = require("../controllers/weather");

userRouter.get("/", [getWeather]);

module.exports = userRouter;
