const assertEqual = function (actual, expected) {
  const green = String.fromCodePoint(0x1F34F);
  const red = String.fromCodePoint(0x1F34E);
  if (actual !== expected) {
    console.log(`${red}${red}${red}Assertion failed: ${actual} !== ${expected}`);
  } else {
    console.log(`${green}${green}${green}Assertion Passed: ${actual} === ${expected}`);
  }
};

const countLetters = function(letters) {
  const result = {};
  for (let letter of letters.split(" ").join("")) {
    if (result[letter]) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};
console.log(countLetters("lighthouse in the house"));

/*
{
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}
*/