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
  ships: [{ locations: ["06", "16", "26"], hits: ["", "", ""], },
          { locations: ["24", "34", "44"], hits: ["", "", ""], },
          { locations: ["10", "11", "12"], hits: ["", "", ""], },],
  fire: function(guess) {
    for (let i = 0; i < this.numShips; i++) {
      let ship = this.ships[i];
    }
  },
};

