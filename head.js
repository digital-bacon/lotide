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