const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');
// To output objects with visibility on the values
const inspect = require('util').inspect;

describe("#findKeyByValue", () => {
  
  const testCaseObject = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  console.log(`using object: ${inspect(testCaseObject)}`)
  
  it("returns `drama` when keyValue argument = 'The Wire'", () => {
    const findKey = 'The Wire';
    const result = findKeyByValue(testCaseObject, findKey)
    assert.strictEqual(result, 'drama');
  });
  
  it("returns undefined when keyValue argument is not found in the object", () => {
    const findKey = 'Star Wars';
    const result = findKeyByValue(testCaseObject, findKey)
    assert.isUndefined(result);
  });
  
});