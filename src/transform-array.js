const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  if (arr.length === 0) {
    return [];
  }
  let array = arr.slice();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      array.splice(i + 1, 1);
    }
    if (arr[i] === '--discard-prev' && i !== 0) {
      array.splice(i - 1, 1);
    } else if (arr[i] === '--discard-prev' && i === 0) {
      array.splice(i, 0);
    }
    if (arr[i] === '--double-next' && i !== arr.length - 1) {
      array.splice(i + 1, 0, arr[i + 1]);
    } else if (arr[i] === '--double-next' && i === arr.length - 1) {
      array.splice(i, 0);
    }
    if (arr[i] === '--double-prev' && i !== 0 && arr[i - 2] !== '--discard-next') {
      array.splice(i - 1, 0, arr[i - 1]);
    } else if (arr[i] === '--double-prev' && i === 0 && arr[i - 2] !== '--discard-next') {
      array.splice(i, 0);
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] === '--discard-next') {
      array.splice(i, 1);
    }
    if (array[i] === '--discard-prev') {
      array.splice(i, 1);
    }
    if (array[i] === '--double-next') {
      array.splice(i, 1);
    }
    if (array[i] === '--double-prev') {
      array.splice(i, 1);
    }
  }
  return array;
}

module.exports = {
  transform
};
