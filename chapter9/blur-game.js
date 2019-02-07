// DEFAULT NAME Exercise Script
"use strict";

console.info('Blur Game');

function init() {
  let images = document.getElementsByTagName('img');
  for (let i = 0; i < images.length; i++) {
    images[i].onclick = showAnswer;
  }
  let img = document.getElementById('zero');

  img.onclick = showAnswer;
}

function showAnswer() {
  let img = document.getElementById('zero');
  img.src = "images/zero.jpg";
}

window.onload = init;