const tail = require('../tail');
const assert = require('chai').assert;

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
// console.log(tail(words));

describe("#tail", () => {
  it("", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]),["Lighthouse", "Labs"]);
  });

});
