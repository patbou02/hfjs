// Battleship Exercise Script
"use strict";

console.info('Battleship');

// VIEW
let view = {
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

// MODEL
let model = {
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
        view.displayHit(guess);
        view.displayMessage("HIT!");
        if (this.isSunk(ship)) {
          view.displayMessage("You sank my battleship!");
          this.shipsSunk++;
        }
        return true;
      }
    }
    view.displayMiss(guess);
    view.displayMessage("You missed.");
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
      let ship = model.ships[i];
      for (let j = 0; j < locations.length; j++) {
        if (ship.locations.indexOf(locations[j]) >= 0) {
          return true;
        }
      }
    }
    return false;
  },
};

/*
model.fire("53"); // miss

model.fire("06"); // hit
model.fire("16"); // hit
model.fire("26"); // hit

model.fire("34"); // hit
model.fire("24"); // hit
model.fire("44"); // hit

model.fire("12"); // hit
model.fire("11"); // hit
model.fire("10"); // hit
*/

// CONTROLLER
let controller = {
  guesses: 0,

  // This method takes a guess in the form of "A0", "B4" etc...
  // and converts it to an ID that is meaningful within the table TDs.
  processGuess: function(guess) {
    let location = parseGuess(guess);
    if (location) {
      this.guesses++;
      let hit = model.fire(location);
      if (hit && model.shipsSunk === model.numShips) {
        view.displayMessage(`You sank all my battleships, in ${this.guesses} guesses.`);
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
    } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
      alert("Oops, that's off the board!");
    } else {
      return row + column;
    }
  }
  return null;
}

/*controller.processGuess("A0");
controller.processGuess("A6");
controller.processGuess("B6");
controller.processGuess("C6");
controller.processGuess("C4");
controller.processGuess("D4");
controller.processGuess("E4");
controller.processGuess("B0");
controller.processGuess("B1");
controller.processGuess("B2");*/

function init() {
  let fireButton = document.getElementById('fireButton');
  fireButton.onclick = handleFireButton;

  let guessInput = document.getElementById('guessInput');
  guessInput.onkeypress = handleKeyPress;

  model.generateShipLocations();
}

function handleFireButton() {
  let guessInput = document.getElementById('guessInput');
  let guess = guessInput.value;
  controller.processGuess(guess);

  guessInput.value = "";
}

function handleKeyPress(e) {
  let fireButton = document.getElementById('fireButton');
  if (e.keyCode === 13) {
    fireButton.click();
    return false;
  }
}

window.onload = init;