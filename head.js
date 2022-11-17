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
 * Function that returns the first element from an array, or undefined
 * if the array was empty
 * @param {Array} array - An array containing one or more elements
 * @returns {*|undefined} The first element from the array, or undefined
 */
const head = (array) => Array.isArray(array) && array.length > 0 ? array[0] : undefined;

// TEST CASES
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head(), undefined);