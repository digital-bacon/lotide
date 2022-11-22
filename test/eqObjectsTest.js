const assert = require('chai').assert;
const eqObjects = require('../lib/eqObjects');

describe("#eqObjects", () => {

  it('should return true when objects are the same', () => {
    const object1 = { a: "1", b: "2" };
    const object2 = { a: "1", b: "2" };
    const expectedResult = true;
    assert.deepEqual(eqObjects(object1, object2), expectedResult);
  });
  
  it('should return true when objects are the same, but elements order differs', () => {
    const object1 = { a: "1", b: "2" };
    const object2 = { b: "2", a: "1" };
    const expectedResult = true;
    assert.deepEqual(eqObjects(object1, object2), expectedResult);
  });

  it('should return false when objects have a different number of values', () => {
    const object1 = { a: "1", b: "2" };
    const object2 = { a: "1", b: "2", c: "3" };
    const expectedResult = false;
    assert.deepEqual(eqObjects(object1, object2), expectedResult);
  });

  it('should return true when objects are the same and contain arrays', () => {
    const object1 = { c: "1", d: ["2", 3] };
    const object2 = { d: ["2", 3], c: "1" };
    const expectedResult = true;
    assert.deepEqual(eqObjects(object1, object2), expectedResult);
  });

  it('should return false when objects contain arrays of with different values', () => {
    const object1 = { c: "1", d: ["2", 3] };
    const object2 = { c: "1", d: ["2", 4] };
    const expectedResult = false;
    assert.deepEqual(eqObjects(object1, object2), expectedResult);
  });

  it('should return false when objects contain arrays of different lengths', () => {
    const object1 = { c: "1", d: ["2", 3] };
    const object2 = { c: "1", d: ["2", 3, 4] };
    const expectedResult = false;
    assert.deepEqual(eqObjects(object1, object2), expectedResult);
  });

  it('should return true when objectsare both empty', () => {
    const object1 = {};
    const object2 = {};
    const expectedResult = true;
    assert.deepEqual(eqObjects(object1, object2), expectedResult);
  });

});