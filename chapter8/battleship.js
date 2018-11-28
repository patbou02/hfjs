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
let ships = [
  {
    locations: ["10", "20", "30"],
    hits: ["", "", ""],
  },
  {
    locations: ["32", "33", "34"],
    hits: ["", "", ""],
  },
  {
    locations: ["63", "64", "65"],
    hits: ["", "", "hit"],
  },
];