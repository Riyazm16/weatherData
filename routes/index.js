const express = require("express");
const userRouter = require("./weather");
const { commonResponse } = require("../constants/commonConstants");
const app = express();

app.use((req, res, next) => {
  console.log(req.url);
  next();
});
// Routes which should handle requests
app.use("/weather", userRouter);

// Error handler for routes
app.use((req, res) => {
  res.status(404).json({
    error: {
      message: commonResponse.endpoint_not_found,
    },
  });
});

module.exports = app;
