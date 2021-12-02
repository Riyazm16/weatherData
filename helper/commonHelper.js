/**
 * check number is prime or not
 * @param {number} number - text to encrypt
 */
const isPrime = (number = 0) => {
  if (number === 2) {
    return true;
  }
  if (number > 0) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
};
module.exports = { isPrime };
