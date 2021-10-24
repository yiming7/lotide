const eqArrays = function(input1, input2) {
  if (input1.length !== input2.length) {
    return false;
  }
  for (let i = 0; i < input1.length; i++) {
    if (input1[i] !== input2[i]) {
      return false;
    }
  }
  return true;
}

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

/*
middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
*/
const middle = function(inputArray){
  let output = [];
  let length = inputArray.length;
  if(length<3){
    output = [];
  }else if(length%2===0){
    output = (inputArray.slice(length/2-1,length/2+1));
  }else{
    output.push(inputArray[Math.floor(length/2)]);
  }
  return output;
}

assertArraysEqual(middle([1, 2]),[]);
assertArraysEqual(middle([1, 2, 3]),[2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);