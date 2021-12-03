/**
 * check number is prime or not
 * @param {number} number
 */
const isPrime = (dayNum = 0) => {
  if (isNaN(dayNum) || !isFinite(dayNum) || dayNum % 1 || dayNum < 2) {
    return false;
  }
  if (dayNum % 2 === 0) {
    if (dayNum == 2) {
      return true;
    }
    return false;
  }
  const sqrt = Math.sqrt(dayNum);
  for (let i = 3; i <= sqrt; i += 2) {
    if (dayNum % i === 0) {
      return false;
    }
  }
  return true;
};
module.exports = { isPrime };
