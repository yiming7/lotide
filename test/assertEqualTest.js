const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#assertEqual", () => {
  it('return false for "Lighthouse Labs", "Bootcamp"', () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"), false);
  });

  it('returns true for 1, 1', () => {
    assert.strictEqual(assertEqual(1, 1), true); 
  });
});
