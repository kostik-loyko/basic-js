const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members) && members.length != 0) {
    let words = members.filter(word => typeof word === 'string' || word instanceof String);
    let arr = words.map(function (elem) {
      return elem.trim()
    });
    let result = arr.reduce((prev, curr) => prev + curr[0], '')
    return result.toUpperCase().split('').sort().join('')
  } else {
    return false
  }
}

module.exports = {
  createDreamTeam
};
