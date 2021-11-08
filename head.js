const assertEqual = require('./assertEqual')

/* TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
*/

const head = function(input) {
  if (Array.isArray(input)) {
    if (input.length > 0) {
      return input[0];
    } else {
      return undefined;
    }
  } else {
    return input;
  }
};

module.exports = head;
