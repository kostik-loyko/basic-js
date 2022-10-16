const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.chain.push(`~(  )~`);
    } else {
      this.chain.push(`~( ${value} )~`);
    }
    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position) && position > 0 && position <= this.chain.length) {
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`);
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = this.chain.join('').slice(1, -1);
    this.chain = [];
    return res;
  }
};

module.exports = {
  chainMaker
};
