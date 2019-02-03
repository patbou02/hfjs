// Battleship Exercise Script
"use strict";

console.info('Battleship');

// MODEL
let MODEL = {
  boardSize: 7,
  numShips: 3,
  shipsSunk: 0,
  shipLength: 3,
  ships: [
    { locations: [0, 0, 0], hits: ["", "", ""], },
    { locations: [0, 0, 0], hits: ["", "", ""], },
    { locations: [0, 0, 0], hits: ["", "", ""], },
  ],
  fire: function(guess) {
    for (let i = 0; i < this.numShips; i++) {
      let ship = this.ships[i];
      let index = ship.locations.indexOf(guess);
      if (index >= 0) {
        // We have a hit!
        ship.hits[index] = "hit";
        VIEW.displayHit(guess);
        VIEW.displayMessage("HIT!");
        if (this.isSunk(ship)) {
          VIEW.displayMessage("You sank my battleship!");
          this.shipsSunk++;
        }
        return true;
      }
    }
    VIEW.displayMiss(guess);
    VIEW.displayMessage("You missed.");
    return false;
  },
  isSunk: function(ship) {
    for (let i = 0; i < this.shipLength; i++) {
      if (ship.hits[i] !== "hit") {
        return false;
      }
    }
    return true;
  },
  generateShipLocations: function() {
    let locations;
    for (let i = 0; i < this.numShips; i++) {
      do {
        locations = this.generateShip();
      } while (this.collision(locations));
      this.ships[i].locations = locations;
    }
  },
  generateShip: function() {
    let direction = Math.floor(Math.random() * 2);
    let row, col;

    // Starting Coordinates
    if (direction === 1) {
      // Horizontal ship
      row = Math.floor(Math.random() * this.boardSize);
      col = Math.floor(Math.random() * this.boardSize - this.shipLength);
    } else {
      // Vertical ship
      row = Math.floor(Math.random() * this.boardSize - this.shipLength);
      col = Math.floor(Math.random() * this.boardSize);
    }

    let newShipLocations = [];
    for (let i = 0; i < this.shipLength; i++) {
      if (direction === 1) {
        // Add location for horizontal ship
        newShipLocations.push(`${row}${col + i}`);
      } else {
        // Add location for vertical ship
        newShipLocations.push(`${row + i}${col}`);
      }
    }
    return newShipLocations;
  },
  collision: function(locations) {
    for (let i = 0; i < this.numShips; i++) {
      let ship = MODEL.ships[i];
      for (let j = 0; j < locations.length; j++) {
        if (ship.locations.indexOf(locations[j]) >= 0) {
          return true;
        }
      }
    }
    return false;
  },
};

// VIEW
let VIEW = {
  // This method takes a string message passed as an argument and displays it
  // in the message display area.
  displayMessage: function(msg) {
    let messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  },
  // This method adds a .hit class in the appropriate table TD based on a passed
  // location argument if passed value DOES match any ship location.
  displayHit: function(location) {
    let cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },
  // This method adds a .miss class in the appropriate table TD based on a passed
  // location argument if passed value DOESN'T match any ship location.
  displayMiss: function(location) {
    let cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  }
};

// CONTROLLER
let CONTROLLER = {
  guesses: 0,

  // This method takes a guess in the form of "A0", "B4" etc...
  // and converts it to an ID that is meaningful within the table TDs.
  processGuess: function(guess) {
    let location = parseGuess(guess);
    if (location) {
      this.guesses++;
      let hit = MODEL.fire(location);
      if (hit && MODEL.shipsSunk === MODEL.numShips) {
        VIEW.displayMessage(`You sank all my battleships, in ${this.guesses} guesses.`);
      }
    }
  }
};

function parseGuess(guess) {
  let alphabet = "ABCDEFG".split('');

  if ((guess === null) || (guess.length !== 2)) {
    alert("Oops, please enter a letter and a number on the board.");
  } else {
    let firstChar = guess.charAt(0),
        row = alphabet.indexOf(firstChar),
        column = guess.charAt(1);

    if (isNaN(row) || isNaN(column)) {
      alert("Oops, that isn't on the board.");
    } else if (row < 0 || row >= MODEL.boardSize || column < 0 || column >= MODEL.boardSize) {
      alert("Oops, that's off the board!");
    } else {
      return row + column;
    }
  }
  return null;
}

function handleFireButton() {
  let guessInput = document.getElementById('guessInput');
  let guess = guessInput.value;
  CONTROLLER.processGuess(guess);

  guessInput.value = "";
}

function handleKeyPress(e) {
  let fireButton = document.getElementById('fireButton');
  if (e.keyCode === 13) {
    fireButton.click();
    return false;
  }
}

function init() {
  let fireButton = document.getElementById('fireButton');
  fireButton.onclick = handleFireButton;

  let guessInput = document.getElementById('guessInput');
  guessInput.onkeypress = handleKeyPress;

  MODEL.generateShipLocations();
}

window.onload = init;