// Phrase-O-Matic Exercise Script

"use strict";

console.info('Phrase-O-Matic');

function makePhrase() {
  let words1 = ["24/7", "multi-tier", "30,000 foot", "B2B", "win-win"];
  let words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
  let words3 = ["process", "solution", "tipping-point", "strategy", "vision"];

  let rand1 = Math.floor(Math.random() * words1.length);
  let rand2 = Math.floor(Math.random() * words2.length);
  let rand3 = Math.floor(Math.random() * words3.length);

  let phrase = `${words1[rand1]} ${words2[rand2]} ${words3[rand3]}.`;

  return console.log(phrase);
}

makePhrase();