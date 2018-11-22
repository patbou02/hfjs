// Bubbles-R-Us Exercise Script

"use strict";

console.info('Bubbles-R-Us');

let scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
let totalTests = scores.length;

function outputScores(arr) {
  for (let i = 0; i < arr.length; i++) {
    let messageOutput = `Bubbles solutions #${i} score: ${arr[i]}.`;
    console.log(messageOutput);
  }
}

console.log(`Bubbles test: ${totalTests}`);

function findHighestScore(arr) {
  let highestScore = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highestScore) {
      highestScore = arr[i];
    }
  }
  console.log(`Highest bubble score: ${highestScore}`);
  return highestScore;
}
findHighestScore(scores);

function valuesWithHighestScore(arr) {
  let valuesWithHighestScore = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === findHighestScore(arr)) {
      valuesWithHighestScore.push(i);
    }
  }
  return console.log(`Solutions with highest score: ${valuesWithHighestScore}`);
}
valuesWithHighestScore(scores);