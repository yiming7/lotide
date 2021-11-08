// FUNCTION IMPLEMENTATION
/* TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
*/

//return everything except for the first item (head) of the provided array
const tail = function(input) {
  if (Array.isArray(input)) {
    if (input.length > 1) {
      return input.slice(1);
    } else {
      return [];
    }
  } else {
    return undefined;  //if this is not an array
  }
};
module.exports = tail;
// Test Case: Check the original array
