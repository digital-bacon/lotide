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

const printAssertEqualResult = (hasEquality, actual, expected) => {
  
  // To output objects with their kv pairs
  const inspect = require('util').inspect;

  // Color settings
  const color = {
    reset: '\x1b[0m', // Reset colors
    messageSuccess: '\x1b[32m', // Green
    messageFailure: '\x1b[33m', // Yellow
    labelResult: '\x1b[36m', // Blue
    labelExpected: '\x1b[36m', // Blue
  };
  
  // Message configuration
  const message = {
    before: '\n',
    success: color.messageSuccess + `TEST PASSED🥳🥳🥳\n` + color.reset,
    failure: color.messageFailure + `TEST FAILED💥💥💥\n` + color.reset,
    result: color.labelResult + `result:\n` + color.reset + `${inspect(actual)}\n`,
    expected: color.labelExpected + `expected:\n` + color.reset + `${inspect(expected)}\n`,
    after: `\n----------`,
    buildMessage: function() {
      let message = '';
      message += this.before;
      message += hasEquality ? this.success : this.failure;
      message += this.result;
      message += this.expected;
      message += this.after;
      return message;
    }
  };

  // Build the message to show the user
  return message.buildMessage();
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