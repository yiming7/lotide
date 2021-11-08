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
module.exports = middle;
