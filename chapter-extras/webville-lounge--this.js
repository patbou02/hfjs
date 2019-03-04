// DEFAULT NAME Exercise Script
"use strict";

console.info('Keeping track of THIS');

let DJ = {
  playsound: function() {
    //console.log(`(playsound) This is: ${this}.`);
    console.log(`Playing ${this.sound}`);
  },
  sound: "bells",
};

let CONTROLLER = {
  start: function() {
    setInterval(function() {
      DJ.playsound();
    }, 1000);
  }
};

window.onload = function () {
  CONTROLLER.start();
};