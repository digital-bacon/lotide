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
    if (!itemsToCount[name]) {
      continue;
    }
    if (result[name] === undefined) {
      result[name] = 0;
    }
    result[name]++;
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