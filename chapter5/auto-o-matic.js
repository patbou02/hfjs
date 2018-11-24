// Auto-O-Matic Exercise Script
"use strict";

console.info('Auto-O-Matic');

function makeCar() {
  let makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
  let models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
  let years = [1955, 1957, 1948, 1954, 1961];
  let colors = ["red", "blue", "tan", "yellow", "white"];
  let convertible = [true, false];

  rand1 = Math.floor(Math.random() * makes.length);
  rand2 = Math.floor(Math.random() * models.length);
  rand3 = Math.floor(Math.random() * years.length);
  rand4 = Math.floor(Math.random() * colors.length);
  rand5 = Math.floor(Math.random() * 5) + 1;
  rand6 = Math.floor(Math.random() * 2);

  let car = {
    make: makes[rand1],
    model: models[rand2],
    year: years[rand3],
    color: colors[rand4],
    passengers: rand5,
    convertible: convertible[rand6],
    mileage: 0,
  };

  return car;
}