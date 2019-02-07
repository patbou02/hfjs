// DEFAULT NAME Exercise Script
"use strict";

console.info('Blur Game');

function init() {
  let img = document.getElementById('zero');

  img.onclick = showAnswer;
}

function showAnswer() {
  let img = document.getElementById('zero');
  img.src = "images/zero.jpg";
}

window.onload = init;