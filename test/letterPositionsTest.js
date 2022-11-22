const assert = require('chai').assert;
const letterPositions = require('../lib/letterPositions');
// To output objects with visibility on the values
const inspect = require('util').inspect;

describe("#letterPositions", () => {
  
  it('should return an object that marks the character positions of each letter found in the given phrase, "lighthouse in the house"', () => {
    const testInput = 'lighthouse in the house';
    const expectedResult = {
      l: [0],
      i: [1, 11],
      g: [2],
      h: [3, 5, 15, 18],
      t: [4, 14],
      o: [6, 19],
      u: [7, 20],
      s: [8, 21],
      e: [9, 16, 22],
      n: [12]
    };
    const result = letterPositions(testInput);
    assert.deepEqual(result, expectedResult);
    console.log(`Output: ${inspect(letterPositions(testInput))}`)
  });

  it('should return an empty object if no word was provided"', () => {
    const expectedResult = { }
    const result = letterPositions();
    assert.deepEqual(result, expectedResult);
  });
  
});