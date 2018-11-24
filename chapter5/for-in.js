// For In Exercise Script
"use strict";

console.info('For In');

let fiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "Medium Blue",
  passengers: 2,
  convertible: false,
  mileage: 88000,
  started: false,
  start: function() {
    this.started = true;
  },
  stop: function() {
    this.started = false;
  },
  drive: function() {
    if (this.started) {
      console.log("Zoom zoom!");
    } else {
      console.log("You need to start the engine first.");
    }
  },
};

// create for in loop that outputs object structure
for (let property in fiat) {
  console.log(`${property}: ${fiat[property]}`);
}