const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let res;
  let sum = 0;
  let numLengthDetect = String(n)
  for (let i = 0; i < numLengthDetect.length; i++) {
    sum += n % 10;
    n = Math.trunc(n / 10)
  }
  if (sum < 10) {

    return sum;
  } else {
    res = getSumOfDigits(sum)
  }
  return res;
}

module.exports = {
  getSumOfDigits
};
