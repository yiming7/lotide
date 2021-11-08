const assertEqual = function(actual, expected) {
  const green = String.fromCodePoint(0x1F34F);
  const red = String.fromCodePoint(0x1F34E);
  if (actual !== expected) {
    console.log(`${red}${red}${red}Assertion failed: ${actual} !== ${expected}`);
  } else {
    console.log(`${green}${green}${green}Assertion Passed: ${actual} === ${expected}`);
  }
};

const eqArrays = function(input1, input2) {
  if(!(Array.isArray(input1) && Array.isArray(input2))){
    return false;
  }
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  if(key1.length!==key2.length){
    return false;
  }
  for(let key of key1){
    if(object2[key]){
      if(Array.isArray(object2[key])){
        if(!eqArrays(object1[key],object2[key])){
          return false;
        }
      }else if(typeof(object2) === "object"){
        if(!eqObjects(object1[key],object2[key])){
          return false;
        }
      }else{
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

/*
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba),true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc),false);   //=>false
*/

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual((eqObjects(cd, cd2)),false); // => false