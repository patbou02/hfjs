"use strict";

console.log("Thing-A-Ma-Jig");

function clunk(times) {
  let num = times;
  while (num > 0) {
    display("clunk");
    num--;
  }
}

function thingamajig(size) {
  let facky = 1;
  clunkCounter = 0;

  if (size === 0) {
    display("clank");
  } else if (size === 1) {
    display("thunk");
  } else {
    while (size > 1) {
      facky = facky * size;
      size--;
    }
    clunk(facky);
  }
}

function display(output) {
  console.log(output);
  clunkCounter++;
}

let clunkCounter = 0;
thingamajig(5);
console.log(clunkCounter);