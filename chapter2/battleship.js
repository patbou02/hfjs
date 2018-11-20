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

/*if ((typeof guess !== 'number') && ((guess < 0) || (guess > 6))) {
  console.info('Please enter a valid guess with the following requirements:\n 1. guess is a number.\n 2. guess is a larger or equal to 0.\n 3. guess is smaller or equal to 6.');
  console.log(typeof guess);
} else {
  console.info('You entered a good guess');
  console.log(typeof guess);

  // Increase number of guesses value.
  guesses++;

  if ((guess === location1) || (guess === location2) || (guess === location3)) {

    // Increase number of hits value.
    hits++;

    if (hits === 3) {
      // set isSunk to true and notify user that they have sunk the battleship.
      isSunk = true;
      console.info('You sank my battleship!');
    }
  }
  // Notify user of how many times they've entered a guess and how many times they've hit the target.
  console.info(`You've guessed ${guesses} time(s).`);
  console.info(`You've hit ${hits} time(s).\n ==== `);
}*/