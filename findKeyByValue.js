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
 * Function that takes in an object and a value. It should scan the
 * object and return the first key which contains the given value
 * @param {Object} object - The object to search
 * @param {string|number|boolean} keyValue - The value to search for
 * @returns {string|undefined} The name of the key that matches, or undefined if
 * no match was found
 */
const findKeyByValue = (object, keyValue) => {
  for (const key in object) {
    if (keyValue === object[key]) return key;
  }
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);