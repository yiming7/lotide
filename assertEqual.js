// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  const green = String.fromCodePoint(0x1F34F);
  const red = String.fromCodePoint(0x1F34E);
  if (actual !== expected) {
    console.log(`${red}${red}${red}Assertion failed: ${actual} !== ${expected}`);
  } else {
    console.log(`${green}${green}${green}Assertion Passed: ${actual} === ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);