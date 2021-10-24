// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
  const green = String.fromCodePoint(0x1F34F);
  const red = String.fromCodePoint(0x1F34E);
  let actual_length = 0;
  if(Array.isArray(actual)){
    actual_length = actual.length;
  }
  let expected_length = 0;
  if(Array.isArray(expected)){
    expected_length = expected.length;
  }

  if (actual_length !== expected_length) {
    console.log(`${red}${red}${red}Assertion failed: ${actual} !== ${expected}`);
    return false;
  }
  for (let i = 0; i < actual_length; i++) {
    if (actual[i] !== expected[i]) {
      console.log(`${red}${red}${red}Assertion failed: ${actual} !== ${expected}`);
      return false;
    }
  }
  console.log(`${green}${green}${green}Assertion Passed: ${actual} === ${expected}`);
  return true;
};

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false