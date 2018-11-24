// Fiat Only Exercise Script
"use strict";

console.info('Fiat Only');

let fiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "Medium Blue",
  passengers: 2,
  convertible: false,
  mileage: 88000,
  started: false,
  fuel: 0,
  start: function() {
    this.started = true;
  },
  stop: function() {
    this.started = false;
  },
  drive: function() {
    if (this.started) {
      if (this.fuel > 0) {
        console.log(`${this.make} ${this.model} goes zoom zoom!`);
        this.fuel--;
      } else {
        console.log(`Uh oh, out of fuel.`);
        this.stop();
      }
    } else {
      console.log("You need to start the engine first.");
    }
  },
  addFuel: function(amount) {
    this.fuel = this.fuel + amount;
  },
};

fiat.drive();
fiat.start();
fiat.drive();
fiat.stop();
