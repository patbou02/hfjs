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
} else {
  console.log("No one on the no-fly list, therefore we are clear for takeoff.");
}

let allPaid = processPassengers(passengers, checkNotPaid);

if (!allPaid) {
  console.log("the plane can't take off: not everyone has paid.");
} else {
  console.log("All have paid, therefore we are clear for takeoff.");
}

function printPassenger(passenger) {
  let message = passenger.name;
  if (passenger.paid === true) {
    message += " has paid.";
  } else {
    message += " has NOT paid.";
  }
  console.log(message);
}

processPassengers(passengers, printPassenger);