// Bubbles-R-Us Exercise Script

"use strict";

console.info('Bubbles-R-Us');

let scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
let totalTests = scores.length;

function outputScores(arr) {
  let output = "Bubbles solutions #";
  for (let i = 0; i < arr.length; i++) {
    output += `${i} score: ${arr[i]}.\n`;

  }
  return output;
}

console.log(`Bubbles test: ${totalTests}`);

function findHighScore(arr) {
  let highScore = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highScore) {
      highScore = arr[i];
    }
  }
  return highScore;
}
findHighScore(scores);

function bestSolutions(arr) {
  let bestSolutions = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === findHighScore(arr)) {
      bestSolutions.push(i);
    }
  }
  return bestSolutions;
}
bestSolutions(scores);