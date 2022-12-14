const assert = require('chai').assert;
const tail = require('../lib/tail');

describe("#tail", () => {
  
  it("should return an array", () => {
    const input = [ "Yo Yo", "Lighthouse", "Labs" ];
    const expectedResult = [];
    assert.isArray(tail(input), expectedResult);
  });
  
  it("should return an array with the first element removed", () => {
    const input = [ "Yo Yo", "Lighthouse", "Labs" ];
    const expectedResult = [ "Lighthouse", "Labs" ];
    assert.deepEqual(tail(input), expectedResult);
  });

  it("should not mutate the original array", () => {
    const input = [ "Yo Yo", "Lighthouse", "Labs" ];
    tail(input);
    const expectedResult = [ "Yo Yo", "Lighthouse", "Labs" ];
    assert.deepEqual(input, expectedResult);
  });

});
