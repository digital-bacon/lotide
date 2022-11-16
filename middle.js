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
 * Function that builds a message for the assertArraysEqual functions in this
 * library
 * @param {boolean} hasEquality - Result of equality check
 * @param {*} actual - Input passed to the equality check
 * @param {*} expected - Expected input in the equality check
 * @returns {string} A formatted message
 */
const printAssertEqualResult = (hasEquality, actual, expected) => {

  // Color settings
  const colorReset = '\x1b[0m'; // Reset colors
  const colorMessageSuccess = '\x1b[32m'; // Green
  const colorMessageFailure = '\x1b[33m'; // Yellow
  const colorLabelResult = '\x1b[36m'; // Blue
  const colorLabelExpected = '\x1b[36m'; // Blue

  // Messages
  const messageBefore = '\n';
  const messageSuccess = colorMessageSuccess + `TEST PASSED🥳🥳🥳\n` + colorReset;
  const messageFailure = colorMessageFailure + `TEST FAILED💥💥💥\n` + colorReset;
  const messageResult = colorLabelResult + `result:\n` + colorReset + `${actual}\n`;
  const messageExpected = colorLabelExpected + `expected:\n` + colorReset + `${expected}\n`;
  const messageAfter = `\n----------`;

  // Build the message to show the user
  let message = '';
  message += messageBefore;
  if (hasEquality) {
    message += messageSuccess;
  } else {
    message += messageFailure;
  }
  message += messageResult;
  message += messageExpected;
  message += messageAfter;
  return message;
};


/**
 * Function that evaluates a number as even
 * @param {number} number - The number to evaluate as even
 * @returns {boolean} The outcome of the evaluation
 */
const isEven = number => {
  if (number <= 0) {
    return number === 0 ? true : false;
  } else {
    return isEven(number - 2);
  }
};

/**
 * Function that returns the middel elemet(s) from an array, or undefined
 * if the array was empty
 * @param {Array} array - An array containing three or more elements
 * @returns {*|undefined} The first element from the array, or undefined
 */
const middle = (array) => {
  // We can only get middle from arrays with at least 3 elements
  if (!Array.isArray(array) || array.length < 3) return [];
  let middle = []; // To store the result
  // Get the item at the middle index
  middle.push(Math.ceil(array.length / 2));
  return middle;
};

// Test cases:
// Edge tests
assertArraysEqual(middle([1]), []) // True
assertArraysEqual(middle([1, 2]), []) // True

// Return single element for arrays with odd number of elements
assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]

// Return two elements for arrays with even number of elements
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4]