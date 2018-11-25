// Typeof Exercise Script
"use strict";

console.info('Typeof');

let test1 = "abcdef"; // string
let test2 = 123;      // number
let test3 = true;     // boolean
let test4 = {};       // object
let test5 = [];       // object (array)
let test6;            // undefined
let test7 = {         // object
  "abcdef": 123,
};
let test8 = ["abcdef", 123]; // object (array)
function test9() {           // function
  return "abcdef";
}

console.log("test1: " + typeof test1);
console.log("test2: " + typeof test2);
console.log("test3: " + typeof test3);
console.log("test4: " + typeof test4);
console.log("test5: " + typeof test5);
console.log("test6: " + typeof test6);
console.log("test7: " + typeof test7);
console.log("test8: " + typeof test8);
console.log("test9: " + typeof test9);