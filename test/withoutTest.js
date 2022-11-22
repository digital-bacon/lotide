const assert = require('chai').assert;
const without = require('../lib/without');

describe("#without", () => {

  it('should return [ 2, 3 ] when given [ 1, 2, 3 ]', () => {
    const array1 = [ 1, 2, 3 ];
    const array2 = [ 1 ];
    const expectedResult = [ 2, 3 ];
    assert.deepEqual(without(array1, array2), expectedResult);
  });
  
  it('should not mutate the original array', () => {
    const wordsBefore = ["hello", "world", "lighthouse"];
    const array2 = ["lighthouse"];
    const wordsAfter = ["hello", "world", "lighthouse"];
    without(wordsAfter, array2);
    assert.deepEqual(wordsBefore, wordsAfter);
  });
  
});