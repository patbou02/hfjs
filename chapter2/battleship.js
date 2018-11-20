// Battleship script
console.info('Play Battleship!');

// Define initial variables
let location1 = 3;
let location2 = 4;
let location3 = 5;
let guess;
let guesses = 0;
let hits = 0;
let isSunk = false;

// Game logic starts
while (isSunk === false) {
  guess = prompt("Ready, aim, fire! (enter a number 0-6):");

  if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number!");
  } else {
    guess++;
    if (guess === location1 || guess === location2 || guess === location3) {
      hits++;
    }
  }
}