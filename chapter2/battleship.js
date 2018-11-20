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
while (!isSunk) {
  guess = prompt("Ready, aim, fire! (enter a number 0-6):");

  if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number!");
  } else {
    guesses++;
    if (guess == location1 || guess == location2 || guess == location3) {
      alert('HIT!');
      hits++;
      if (hits === 3) {
        isSunk = true;
        console.info("You sank my battleship!");
        let accuracy = (3/guesses)*100;
        let stats = `You took ${guesses} guesses to sink the battleship, which means your shooting accuracy was ${accuracy}%.`;
        console.log(stats);
      }
    } else {
      alert('MISS');
    }
  }
}