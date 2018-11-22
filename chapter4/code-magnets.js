// Code Magnets Exercise Script

"use strict";

console.info('Code Magnets');

let products = ["Choo choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
let hasBubbleGum = [false, false, false, true];

for (let i = 0; i < hasBubbleGum.length; i++) {
  if (hasBubbleGum[i]) {
    console.log(products[i] + ' contains bubble gum.');
  }
}