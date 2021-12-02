const Apilog = require("../models/api_log");
const { setResponse } = require("../common/responseHandler");
const { responseCodes } = require("../constants/commonConstants");

/**
 * Creates a new item in database
 * @param {Object} req - request object
 */
const addApiResponse = (data) => {
  return new Promise((resolve, reject) => {
    const oApidata = new Apilog(data);
    oApidata.save((err, item) => {
      if (err) {
        return reject(
          setResponse(responseCodes.unable_to_process, err.message)
        );
      }
      return resolve(item);
    });
  });
};

module.exports = {
  addApiResponse,
};
