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

const findKeyByValue = function(input, value){
  let output = "";
  
  for(let key of Object.keys(input)){
    if(input[key] === value){
      return key;
    }
  }
  return undefined;
}


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);