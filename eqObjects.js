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
 * Function that evaluates two provided objects for equality
 * @param {Object} object1 - The first object to evaluate
 * @param {Object} object2 - The second object to evaluate
 */
const eqObjects = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  // Evaluate for total keys
  if (keys1.length !== keys2.length) return false;
  // Evaluate each property for equality
  for (const key of keys1) {
    const value1 = object1[key];
    const value2 = object2[key];
    // Evaluate as an array if an array
    if (Array.isArray(value1)) {
      if (eqArrays(value1, value2) === false) return false;
    } else {
      // Otherwise, evaluate as a primitive
      if (value1 !== value2) return false;
    }
  }
  // No tests remain, so we have equality
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const obj1 = { c: "1", d: ["2", 3] };
const obj2 = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(obj1, obj2), true); // => true

const obj3 = { c: "1", d: ["2", 3] };
const obj4 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(obj3, obj4), false); // => false