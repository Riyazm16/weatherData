/**
 * Builds error object
 * @param {number} code - error code
 * @param {string} message - error text
 */
const setResponse = (code = null, message = null) => {
  return {
    code,
    message,
  };
};

module.exports = { setResponse };
