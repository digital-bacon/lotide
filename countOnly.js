/**
 * Function that compares 2 values for equality and prints out a
 * message telling us if they match or not
 * @param {string|number|boolean} actual - The first item to compare
 * @param {string|number|boolean} expected - The second item to compare
 * @returns {string} Prints message with match outcome
 */
const assertEqual = (actual, expected) => {
  console.log(printAssertEqualResult((actual === expected), actual, expected));
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
 * Function that when given an array and an object, it will return an
 * object containing counts of everything that the input object listed
 * @param {Array<string>} allItems - Array of strings to look through
 * @param {Object} itemsToCount - Object with key value pairs
 * specifying what to count
 * @param {string|number} itemsToCount.key - All keys in itemsToCount
 * match a name as the key name, with a boolean value indicating if the
 * name will be counted. For example, to count `John` assign a property
 * `John: true`
 */
const countOnly = (allItems, itemsToCount) => {
  const result = {}; // An object to hold the results
  // Loop through provided itemsToCount
  for (const name of allItems) {
    if (itemsToCount[name]) { // If name is found, and value = true...
      // Increment the count of this name in the result object by 1
      // If the name doesn't exist in the name object, create it
      result[name] ? result[name] += 1 : result[name] = 1;
    }
  }
  return result;
};

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

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);