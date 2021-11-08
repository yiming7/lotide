const takeUntil = function(array,callback){
  const results = [];
  for (let item of array) {
    if(callback(item)){
      return results;
    }else{
      results.push(item);
    }
  }
  return results;
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


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]);









