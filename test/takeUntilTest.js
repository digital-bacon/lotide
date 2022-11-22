const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {

  it('should return [1, 2, 5, 7, 2, -1, 2, 4, 5] when given [ 1, 2, 5, 7, 2 ] and a callaback of `x => x < 0`', () => {
    const array = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const expectedResult = [ 1, 2, 5, 7, 2 ];
    const callback = x => x < 0;
    assert.deepEqual(takeUntil(array, callback), expectedResult);
  });
  
  it(`should return [ 'I\'ve', 'been', 'to', 'Hollywood' ] when given ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"] and a callback of (x) => x === ','`, () => {
    const array = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const expectedResult = [ 'I\'ve', 'been', 'to', 'Hollywood' ];
    const callback = x => x === ',';
    assert.deepEqual(takeUntil(array, callback), expectedResult);
  });

});