// FUNCTION IMPLEMENTATION
const eqArrays = function (input1, input2) {
  if (!(Array.isArray(input1) && Array.isArray(input2))) {
    return false;
  }
  if (input1.length !== input2.length) {
    return false;
  }
  for (let i = 0; i < input1.length; i++) {
    if(Array.isArray(input1[i])&&Array.isArray(input2[i])){
      return eqArrays(input1[i],input2[i]);
    }else if(Array.isArray(input1[i])||Array.isArray(input2[i])){
      return false;
    }else if(input1[i] !== input2[i]) {
      return false;
    }
  }
  return true;
};
module.exports = eqArrays;