// Lie Detector Exercise Script
"use strict";

console.info('Lie Detector');

function lieDetectorTest() {
  let lies = 0;

  let stolenDiamond = {};

  // truthy +1
  if (stolenDiamond) {
    console.log("You stole the diamond");
    lies++;
  }

  let car = {
    keysInPocket: null,
  };

  // null is falsey
  if (car.keysInPocket) {
    console.log("Uh oh, guess you stole the car!");
    lies++;
  }

  // undefined is falsey
  if (car.emptyGasTank) {
    console.log("You drove the car after you stole it!");
    lies++;
  }

  let foundYouAtTheCrimeScene = [ ];

  // truthy +1
  if (foundYouAtTheCrimeScene) {
    console.log("A sure sign of guilt");
    lies++;
  }

  // undefined is falsey
  if (foundYouAtTheCrimeScene[0]) {
    console.log("Caught with a stolen item!");
    lies++;
  }

  let yourName = " ";

  // truthy +1
  if (yourName) {
    console.log("Guess you lied about your name");
    lies++;
  }

  return lies;
}

let numberOfLies = lieDetectorTest();
console.log(`You told ${numberOfLies} lies!`);

if (numberOfLies >= 3) {
  console.log("Guilty as charged");
}