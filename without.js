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
    result: color.labelResult + `result:\n` + color.reset + `${actual}\n`,
    expected: color.labelExpected + `expected:\n` + color.reset + `${expected}\n`,
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
 * Function that copies the `source` array, while excluding items that
 * are found in the `removeItems` array
 * @param {Array<string|number|boolean>} sourceItems - The array to be copied
 * @param {Array<string|number|boolean>} removeItems - An array of items to not include in the
 * returned array
 * @returns {Array} The copied array
 */
const without = (sourceItems, removeItems) => {
  let output = [];
  for (const sourceItem of sourceItems) {
    let canAddItem = true;
    loopRemoveItems:
    for (const removeItem of removeItems) {
      // Check if the current source item matches an item in remove items
      if (removeItem === sourceItem) {
        canAddItem = false;
        break loopRemoveItems;
      }
    }
    // Add source item to new array if not an item in removeItems
    if (canAddItem) output.push(sourceItem);
  }
  // Return the new array
  return output;
};

// TEST CASES
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);