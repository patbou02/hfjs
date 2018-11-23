// Bubbles-R-Us Exercise Script

"use strict";

console.info('Bubbles-R-Us');

let scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
let totalTests = scores.length;

function outputScores(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Bubbles solutions #${i} score: ${arr[i]}`);
  }
}

function findHighScore(arr) {
  let highScore = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highScore) {
      highScore = arr[i];
    }
  }
  return highScore;
}

function bestSolutions(arr) {
  let bestSolutions = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === findHighScore(arr)) {
      bestSolutions.push(i);
    }
  }
  return bestSolutions;
}

outputScores(scores);

console.log(`Bubbles test: ${totalTests}`);

let highestScore = console.log("Highest bubble score: " + findHighScore(scores));
let best = console.log("Solutions with the highest score: " + bestSolutions(scores));