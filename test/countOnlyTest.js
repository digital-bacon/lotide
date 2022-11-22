const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

  it('should return the correct count when given an array and an object of items to look for', () => {
    assert.strictEqual(result1["Jason"], 1);
  });
  
  it('should return an object of counts when given an array and an object of items to look for', () => {
    const expectedResult = { "Fang": 2, "Jason": 1 };
    assert.deepEqual(result1, expectedResult);
  });

  it('should not return counts for items that were not being looked for', () => {
    assert.isUndefined(result1["Karima"]);
  });
  
});
