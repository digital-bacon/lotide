const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {

  it('should evaluate arrays as equal when they are the same', () => {
    const array1 = [1, 2, 3];
    const array2 = [1, 2, 3];
    const expectedResult = true;
    assert.deepEqual(eqArrays(array1, array2), expectedResult);
  });

  it('should evaluate arrays as not equal when they are different', () => {
    const array1 = [1, 2, 3];
    const array2 = [3, 2, 1];
    const expectedResult = false;
    assert.deepEqual(eqArrays(array1, array2), expectedResult);
  });

  it('should evaluate array values for type equality', () => {
    const array1 = ["1", "2", "3"];
    const array2 = ["1", "2", 3];
    const expectedResult = false;
    assert.deepEqual(eqArrays(array1, array2), expectedResult);
  });

  it('should evaluate arrays with mixed value types as equal when they are the same', () => {
    const array1 = ["1", true, null];
    const array2 = ["1", true, null];
    const expectedResult = true;
    assert.deepEqual(eqArrays(array1, array2), expectedResult);
  });

});
