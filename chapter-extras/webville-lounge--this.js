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
    console.log('(start method) This: ', this);
    setInterval(DJ.playsound.bind(DJ), 1000);
  }
};

window.onload = function () {
  let startButton = document.getElementById('start');
  startButton.onclick = CONTROLLER.start;

  let stopButton = document.getElementById('stop');
  stopButton.onclick = CONTROLLER.stop;
};

//let newPlaysound = DJ.playsound.bind(DJ);
//setInterval(newPlaysound, 1000);