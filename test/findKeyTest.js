const assert = require('chai').assert;
const findKey = require('../findKey');
// To output objects with visibility on the values
const inspect = require('util').inspect;

describe("#findKey", () => {
  
  const testCaseObject = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };
  console.log(`using object: ${inspect(testCaseObject)}`);
  
  it("returns `noma` for `x => x.stars === 2`", () => {
    const testLogic = x => x.stars === 2;
    const result = findKey(testCaseObject, testLogic);
    assert.strictEqual(result, 'noma');
  });
  
  it("returns undefined for `x => x === 'John'", () => {
    const testLogic = x => x === 'John';
    const result = findKey(testCaseObject, testLogic);
    assert.isUndefined(result);
  });
  
});