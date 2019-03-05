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
    //console.log('(start method) This: ', this);
    this.timer = setInterval(DJ.playsound.bind(DJ), 1000);
  },
  stop: function() {
    //console.log('(stop method) This: ', this);
    clearInterval(this.timer);
  },
};

window.onload = function () {
  let startButton = document.getElementById('start');
  let stopButton = document.getElementById('stop');

  /*
  * Method 1 - Using anonymous function:
  * call start() method of the CONTROLLER object within an anonymous function
  * to insure that THIS is set to CONTROLLER. */
  startButton.onclick = function() {
    CONTROLLER.start();
  };

  /*
  * Method 2 - Using bind():
  * Use within CONTROLLER.stop() and pass CONTROLLER thru it in order
  * to make sure CONTROLLER is bound to THIS. */
  stopButton.onclick = CONTROLLER.stop.bind(CONTROLLER);
};