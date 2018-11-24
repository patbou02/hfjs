// Eight Ball Exercise Script
"use strict";

console.info('Eight Ball');

let eightBall = {
  index: 0,
  advice: ["Yes", "No", "Maybe", "Not a chance"],
  shake: function() {
    this.index++;
    if (this.index >= this.advice.length) {
      this.index = 0;
    }
  },
  look: function() {
    return this.advice[this.index];
  },
};

eightBall.shake();
console.log(eightBall.look());