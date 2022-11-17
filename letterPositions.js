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

/**
 * Function that compares 2 arrays for equality and returns the result
 * @param {Array<string|number|boolean>} array1 - The first array to compare
 * @param {Array<string|number|boolean>} array2 - The second array to compare
 * @returns {boolean} The result of the evaluation
 */
const eqArrays = (array1, array2) => {
  // If the items being asserted are arrays...
  if (!Array.isArray(array1) || !Array.isArray(array2)) return false;
  // Ensure length of the arrays are as array2
  if (array1.length !== array2.length) return false;
  // Evaluate each element for equality
  for (let element = 0; element < array2.length; element++) {
    // Evaluate element type equality
    if (array1[element] !== array2[element]) return false;
  }
  // No tests remain, so we have equality
  return true;
};

/**
 * Function that builds a message for the assertEqual functions in this
 * library
 * @param {boolean} hasEquality - Result of equality check
 * @param {*} actual - Input passed to the equality check
 * @param {*} expected - Expected input in the equality check
 * @returns {string} A formatted message
 */
const printAssertEqualResult = (hasEquality, actual, expected) => {
  
  // To output objects with their kv pairs
  const inspect = require('util').inspect;
  
  // Message configuration
  const config = [
    {type: 'before', color: '', text: '\n'},
    {type: 'success', color: '\x1b[32m', text: `TEST PASSED🥳🥳🥳\n`},
    {type: 'failure', color: '\x1b[33m', text: `TEST FAILED💥💥💥\n`},
    {type: 'actual-label', color: '\x1b[36m', text: `result:\n`},
    {type: 'actual-value', color: '', text: `${inspect(actual)}\n`},
    {type: 'expected-label', color: '\x1b[36m', text: `expected:\n`},
    {type: 'expected-value', color: '', text: `${inspect(expected)}\n`},
    {type: 'after', color: '', text: `\n----------`},
  ];
  
  const resetColor = '\x1b[0m';
  let message = '';
  for (const object in config) {
    if (config[object].type === 'success' && !hasEquality) continue; // Skip this message
    if (config[object].type === 'failure' && hasEquality) continue; // Skip this message
    message += config[object].color + config[object].text + resetColor;
  }
  return message;
};

/**
 * Function that receives a string, and returns an object with a key
 * for each unique character, as well the character positions in the
 * string
 * @param {string} sentence - The string to analyze
 * @returns {Object} An object with a key matching each unique
 * character, and where to find them in the sentence
 */
const letterPositions = function(sentence) {
  const results = {};
  // Look at each index
  loopSentence:
  for (const index in sentence) {
    let keyName = sentence[index];
    // Don't count spaces
    if (keyName === ' ') continue loopSentence;
    // If the index is not yet a key in `results`, create it
    if (!results[keyName]) results[keyName] = [];
    // Record the index in the results
    results[sentence[index]].push(Number(index));
  }
  return results;
};

// Test case

const testInput = 'lighthouse in the house';
const expectedResult = {
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
};

assertArraysEqual(letterPositions(testInput).l, expectedResult.l);
assertArraysEqual(letterPositions(testInput).i, expectedResult.i);
assertArraysEqual(letterPositions(testInput).g, expectedResult.g);
assertArraysEqual(letterPositions(testInput).h, expectedResult.h);
assertArraysEqual(letterPositions(testInput).t, expectedResult.t);
assertArraysEqual(letterPositions(testInput).o, expectedResult.o);
assertArraysEqual(letterPositions(testInput).u, expectedResult.u);
assertArraysEqual(letterPositions(testInput).s, expectedResult.s);
assertArraysEqual(letterPositions(testInput).e, expectedResult.e);
assertArraysEqual(letterPositions(testInput).n, expectedResult.n);