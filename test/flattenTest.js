const assert = require('chai').assert;
const flatten = require('../lib/flatten');

describe("#flatten", () => {

  it('should return [ 1, 2, 3, 4 ] when given [ 1, 2, [ 3, 4 ] ]', () => {
    const array1 = [ 1, 2, [ 3, 4 ] ];
    const expectedResult = [ 1, 2, 3, 4 ];
    assert.deepEqual(flatten(array1), expectedResult);
  });

  it('should return [ 1, 2, 3, 4 ] when given [ [ 1, 2 ], [ 3, 4 ] ]', () => {
    const array1 = [ [ 1, 2 ], [ 3, 4 ] ];
    const expectedResult = [ 1, 2, 3, 4 ];
    assert.deepEqual(flatten(array1), expectedResult);
  });
  
  it('should return [ 1, 2, 3, 4 ] when given [ [ 1, [ 2, 3 ], 4 ] ]', () => {
    const array1 = [ [ 1, 2 ], [ 3, 4 ] ];
    const expectedResult = [ 1, 2, 3, 4 ];
    assert.deepEqual(flatten(array1), expectedResult);
  });

  it('should return [ 1, 2, 3, 4 ] when given [ [ [ 1 ], [ [ 2 ], [ 3 ] ], [ 4 ] ] ]', () => {
    const array1 = [ [ 1, 2 ], [ 3, 4 ] ];
    const expectedResult = [ 1, 2, 3, 4 ];
    assert.deepEqual(flatten(array1), expectedResult);
  });

  it('should return [1, 2, {apple: 3, orange: 4}, 5, 6] when given [1, 2, {apple: 3, orange: 4}, 5, [6]]),  ', () => {
    const array1 = [ 1, 2, [ 3, 4 ] ];
    const expectedResult = [ 1, 2, 3, 4 ];
    assert.deepEqual(flatten(array1), expectedResult);
  });
  
});