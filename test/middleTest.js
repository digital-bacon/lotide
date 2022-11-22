const assert = require('chai').assert;
const middle = require('../lib/middle');

describe("#middle", () => {
  
  it("should return an array with a single element when given an array with an odd number of elements", () => {
    const input = [1, 2, 3, 4, 5];
    const expectedResult = [3];
    assert.deepEqual(middle(input), expectedResult);
  });
  
  it("should return an array with a single element when given an array with an even number of elements", () => {
    const input = [1, 2, 3, 4, 5, 6];
    const expectedResult = [3, 4];
    assert.deepEqual(middle(input), expectedResult);
  });
  
  it("should always return an array", () => {
    const input = [ "Yo Yo", "Lighthouse", "Labs" ];
    const expectedResult = [];
    assert.isArray(middle(input), expectedResult);
  });
  
  it("should return an empty array when given an array with two elements", () => {
    const input = [1, 2];
    const expectedResult = [];
    assert.deepEqual(middle(input), expectedResult);
  });
  
  it("should return an empty array when given an array one element", () => {
    const input = [1];
    const expectedResult = [];
    assert.deepEqual(middle(input), expectedResult);
  });

});
