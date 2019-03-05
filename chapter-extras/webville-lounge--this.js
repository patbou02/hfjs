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
  timer: null,
  start: function() {
    console.log('(start method) This: ', this);
    this.timer = setInterval(DJ.playsound.bind(DJ), 1000);
  },
  stop: function() {
    console.log('(stop method) This: ', this);
    clearInterval(this.timer);
  },
};

window.onload = function () {
  let startButton = document.getElementById('start');
  startButton.onclick = CONTROLLER.start;

  let stopButton = document.getElementById('stop');
  stopButton.onclick = CONTROLLER.stop;
};

//let newPlaysound = DJ.playsound.bind(DJ);
//setInterval(newPlaysound, 1000);