const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = ''
  for (let i = 0; i < str.length; i++) {
    let count = 1;
    while (i < str.length - 1 && str[i] == str[i + 1]) {
      count++;
      i++;
    }
    if (count === 1) {
      res += str[i];
    } else {
      res += count;
      res += str[i];

    }

  }
  return res
}

module.exports = {
  encodeLine
};
