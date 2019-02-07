// DEFAULT NAME Exercise Script
"use strict";

console.info('Map Game');

window.onload = init;

function init() {
  let map = document.getElementById('map');

  map.onmousemove = showCoordinates;
}

function showCoordinates(eventObj) {
  let map = document.getElementById('coords');
  let x = map.pageX;
  let y = map.pageY;
  map.innerHTML = `Map coordinates: ${x}, ${y}`;
  let img = eventObj.target;
  let name = img.id + ".jpg";

  img.src = "images/" + name;
}



