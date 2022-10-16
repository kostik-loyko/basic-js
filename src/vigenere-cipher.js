const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(value) {
    this.value = value
    this.alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  }
  encrypt(string, key) {
    let newStr = []
    if (string && key) {
      let missedStep = 0;
      let j = 0;
      for (let i = 0; i < string.length; i++) {
        let position = 0;

        if (this.alphabet.indexOf(string[i].toLowerCase()) === -1) {
          newStr[i] = string[i]
          missedStep++
          continue
        }
        if (j === key.length) {
          j = 0
        }
        position = this.alphabet.indexOf(string[i].toLowerCase()) + this.alphabet.indexOf(key[j].toLowerCase())
        if (position >= 26) {
          position = position - 26
        }
        j = j + 1
        newStr[i] = this.alphabet[position]

      }

    } else {
      throw new Error('Incorrect arguments!');
    }
    if (this.value === false) {
      return newStr.reverse().join('').replace(/[A-Za-z]/gi, this.UpperCase)
    }
    return newStr.join('').replace(/[A-Za-z]/gi, this.UpperCase)
  }
  decrypt(string, key) {

    let newStr = []
    if (string && key) {
      let j = 0;
      for (let i = 0; i < string.length; i++) {
        let position = 0;
        if (this.alphabet.indexOf(string[i].toLowerCase()) === -1) {
          newStr[i] = string[i]
          continue
        }
        if (j === key.length) {
          j = 0
        }
        position = this.alphabet.indexOf(string[i].toLowerCase()) - this.alphabet.indexOf(key[j].toLowerCase())
        if (position < 0) {
          position = position + 26
        }
        j = j + 1
        newStr[i] = this.alphabet[position]
      }
    } else {
      throw new Error('Incorrect arguments!');
    }
    if (this.value === false) {
      return newStr.reverse().join('').replace(/[A-Za-z]/gi, this.UpperCase)
    }
    return newStr.join('').replace(/[A-Za-z]/gi, this.UpperCase)
  }
  UpperCase(match) {
    return match.toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine
};
