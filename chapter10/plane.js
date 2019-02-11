// DEFAULT NAME Exercise Script
"use strict";

console.info('Plane Game');

let passengers = [
  { name: "Pierre", paid: true },
  { name: "Nora", paid: true },
  { name: "Pascal", paid: false },
  { name: "Yannick", paid: false },
  { name: "Jean Pierre", paid: true },
];

function processPassengers(passengers, testFunction) {
  for (let i = 0; i < passengers.length; i++) {
    if (testFunction(passengers[i])) {
      return false;
    }
  }
  return true;
}

function checkNoFlyList(passenger) {
  return (passenger.name === "Pascal");
}

function checkNotPaid(passenger) {
  return (!passenger.paid);
}

let allCanFly = processPassengers(passengers, checkNoFlyList);

if (!allCanFly) {
  console.log("The plane can't take off: we have a passenger on the no-fly list.");
}

let allPaid = processPassengers(passengers, checkNotPaid);

if (!allPaid) {
  console.log("the plane can't take off: not everyone has paid.");
}

function printPassenger(passenger) {
  return console.log(passengers.name);
}

processPassengers(passengers, printPassenger);