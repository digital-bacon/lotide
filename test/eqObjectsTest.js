const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {

  it('should return true when objects are the same', () => {
    const array1 = { a: "1", b: "2" };
    const array2 = { a: "1", b: "2" };
    const expectedResult = true;
    assert.deepEqual(eqObjects(array1, array2), expectedResult);
  });
  
  it('should return true when objects are the same, but elements order differs', () => {
    const array1 = { a: "1", b: "2" };
    const array2 = { b: "2", a: "1" };
    const expectedResult = true;
    assert.deepEqual(eqObjects(array1, array2), expectedResult);
  });

  it('should return false when objects have a different number of values', () => {
    const array1 = { a: "1", b: "2" };
    const array2 = { a: "1", b: "2", c: "3" };
    const expectedResult = false;
    assert.deepEqual(eqObjects(array1, array2), expectedResult);
  });

  it('should return true when objects are the same and contain arrays', () => {
    const array1 = { c: "1", d: ["2", 3] };
    const array2 = { d: ["2", 3], c: "1" };
    const expectedResult = true;
    assert.deepEqual(eqObjects(array1, array2), expectedResult);
  });

  it('should return false when objects contain arrays of with different values', () => {
    const array1 = { c: "1", d: ["2", 3] };
    const array2 = { c: "1", d: ["2", 4] };
    const expectedResult = false;
    assert.deepEqual(eqObjects(array1, array2), expectedResult);
  });

  it('should return false when objects contain arrays of different lengths', () => {
    const array1 = { c: "1", d: ["2", 3] };
    const array2 = { c: "1", d: ["2", 3, 4] };
    const expectedResult = false;
    assert.deepEqual(eqObjects(array1, array2), expectedResult);
  });

  it('should return true when objectsare both empty', () => {
    const array1 = {};
    const array2 = {};
    const expectedResult = true;
    assert.deepEqual(eqObjects(array1, array2), expectedResult);
  });

});