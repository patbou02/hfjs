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
  let x = eventObj.pageX;
  let y = eventObj.pageY;
  map.innerHTML = `Map coordinates: ${x}, ${y}`;
}



