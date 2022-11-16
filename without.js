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