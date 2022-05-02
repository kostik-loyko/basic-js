const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
   let concatArray = matrix.reduce((prev, curr) => {
      return prev.concat(curr)
   }, [])
   let result = concatArray.reduce((prev, curr) => {
      if (curr === '^^') {
         prev++
      }
      return prev
   }, 0)
   return result
}

module.exports = {
   countCats
};
