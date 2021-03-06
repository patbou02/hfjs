// Pre-Qualification Exercise Script
"use strict";

console.info('Pre-Qualification');

let taxi = {
  make: "Webville Motors",
  model: "Taxi",
  year: 1955,
  color: "yellow",
  passengers: 4,
  convertible: false,
  mileage: 281341,
};

function prequal(car) {
  if (car.mileage > 10000) {
    return false;
  } else if (car.year > 1960) {
    return false
  }
  return true;
}

let worthALook = prequal(taxi);

if (worthALook) {
  console.log(`You gotta checkout this ${taxi.make} ${taxi.model}.`);
} else {
  console.log(`You should really pass on the ${taxi.make} ${taxi.model}.`);
}