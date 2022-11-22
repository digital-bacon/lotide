const eqObjects = require('./eqObjects');
const printAssertEqualResult = require('./printAssertEqualResult');

/**
 * Function that compares 2 objects for equality and prints out a
 * message telling us if they match or not
 * @param {Object} actual - The first item to compare
 * @param {Object} expected - The second item to compare
 */
const assertObjectsEqual = (object1, object2) => {
  
  return console.log(printAssertEqualResult(eqObjects(object1, object2), object1, object2));
};

module.exports = assertObjectsEqual;