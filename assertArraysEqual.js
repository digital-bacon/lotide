const eqArrays = require('./eqArrays');
const printAssertEqualResult = require('./printAssertEqualResult');

/**
 * Function that compares 2 arrays for equality and prints out a
 * message telling us if they match or not
 * @param {Array<string|number|boolean>} array1 - The first array to compare
 * @param {Array<string|number|boolean>} array2 - The second array to compare
 * @returns {boolean} The result of the evaluation
 */
const assertArraysEqual = (array1, array2) => {
  return console.log(printAssertEqualResult(eqArrays(array1, array2), array1, array2));
};

module.exports = assertArraysEqual;