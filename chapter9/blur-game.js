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

function showAnswer(eventObj) {
  let img = eventObj.target;
  let name = img.id + ".jpg";

  img.src = "images/" + name;
}

window.onload = init;