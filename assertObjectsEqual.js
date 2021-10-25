const eqObjects = function(object1, object2) {
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  if(key1.length!==key2.length){
    return false;
  }
  for(let key of key1){
    if(object2[key]){
      switch (typeof(object2)){
        case 'array':
          if(!eqArrays(object1[key],object2[key])){
            return false;
          }
          break;
        case 'object':
          if(!eqObjects(object1[key],object2[key])){
            return false;
          }
          break;
        default:
          if(object1[key]!==object2[key]){
            return false;
          }
      }
    }else{
      return false;
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  const green = String.fromCodePoint(0x1F34F);
  const red = String.fromCodePoint(0x1F34E);
  if(eqObjects(actual,expected)){
    console.log(`${green}${green}${green}Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }else{
    console.log(`${red}${red}${red}Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(cd,dc);