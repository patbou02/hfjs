// DEFAULT NAME Exercise Script
"use strict";

console.info('Blur Game');

function init() {
  let images = document.getElementsByTagName('img');
  for (let i = 0; i < images.length; i++) {
    images[i].onclick = showAnswer;
  }
}

function showAnswer(eventObj) {
  let img = eventObj.target;
  let name = img.id + ".jpg";

  img.src = "images/" + name;

  setTimeout(reblur, 2000, img);
}

function reblur(img) {
  let name = img.id + "blur.jpg";

  img.src = "images/" + name;
}

window.onload = init;