// DEFAULT NAME Exercise Script
"use strict";

console.info('Plane Game');

let passengers = [
  { name: "Pierre", paid: true, ticket: "coach", },
  { name: "Nora", paid: true, ticket: "premium", },
  { name: "Pascal", paid: false, ticket: "firstclass", },
  { name: "Yannick", paid: false, ticket: "premium", },
  { name: "Jean Pierre", paid: true, ticket: "coach", },
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
  passenger.paid ? message += " has paid." : message += " has NOT paid.";
  console.log(message);
}

processPassengers(passengers, printPassenger);

function serveCustomer(passenger) {
  // createDrinkOrder returns function in stored getDrinkOrderFunction variable
  let getDrinkOrderFunction = createDrinkOrder(passenger);
  let getDinnerOrderFunction = createDinnerOrder(passenger);
  getDrinkOrderFunction();
  // get drink order
  getDinnerOrderFunction();
  // get dinner order

  // use function we get from createDrinkOrder whenever we need to get a drink order for this passenger
}

function createDrinkOrder(passenger) {
  let orderFunction; // variable will hold function to be returned

  if (passenger.ticket === "firstclass") { // test passenger's ticket type
    // first class? create function to take first class order
    orderFunction = function() {
      alert("Would you like a cocktail or wine?");
    };
  } else if (passenger.ticket === "premium") {
    orderFunction = function() {
      alert("Would you like wine, cola or water?");
    };
  } else {
    // coach? create function to take coach class order
    orderFunction = function() {
      alert("Your choice is cola or water.");
    };
  }
  return orderFunction; // return function
}

function createDinnerOrder(passenger) {
  let orderFunction;

  if (passenger.ticket === "fistclass") {
    orderFunction = function() {
      alert("Would you like chicken or pasta?");
    };
  } else if (passenger.ticket === "premium") {
    orderFunction = function() {
      alert("Can I offer you a snackbox or a cheese plate?");
    };
  } else {
    orderFunction = function() {
      alert("Peanuts or pretzels?");
    }
  }
  return orderFunction;
}

function servePassengers(passengers) {
  for (let i = 0; i < passengers.length; i++) {
    serveCustomer(passengers[i]);
  }
}

servePassengers(passengers);