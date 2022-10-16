const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, { repeatTimes, separator = '+', addition = '', additionRepeatTimes, additionSeparator = '|' }) {
  let resStr = String(str);
  addition = String(addition);
  if (repeatTimes) {
    for (let i = 0; i < repeatTimes; i++) {
      if (additionRepeatTimes) {
        for (let j = 0; j < additionRepeatTimes - 1; j++) {
          resStr = resStr + addition + additionSeparator;
        }
        resStr = resStr + addition;
      } else {
        resStr = resStr + addition;
      }
      if (i === repeatTimes - 1) {
        resStr = resStr;
      } else {
        resStr = resStr + separator + str;
      }
    }
  } else {
    resStr = resStr + addition;
    return resStr;
  }
  return resStr;
}

module.exports = {
  repeater
};
