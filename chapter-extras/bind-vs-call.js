// DEFAULT NAME Exercise Script
"use strict";

console.info('Comparing CALL versus BIND');

function testThis() {
  console.log("This is: ", this);
}

let dog = {
  name: "Fido",
};

testThis.call(dog); // <== CALLs testThis right away

let newFunction = testThis.bind(dog);
newFunction();