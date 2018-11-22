// Code Magnets Exercise Script

"use strict";

console.info('Code Magnets');

let products = ["Choo choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
let hasBubbleGum = [false, false, false, true];

let i = 0;
while (i < hasBubbleGum.length) {
  if (hasBubbleGum[i]) {
    console.log(products[i] + ' contains bubble gum.');
  }
  i++;
}