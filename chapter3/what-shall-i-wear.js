// What Shall I Wear Exercise Script

console.info('What Shall I Wear?');

function whatShallIWear(temp) {
  if (temp < 60) {
    console.log("Wear a jacket");
  } else if (temp < 70) {
    console.log("Wear a sweater");
  } else {
    console.log("Wear a t-shirt");
  }
}

whatShallIWear(50);
whatShallIWear(80);
whatShallIWear(60);