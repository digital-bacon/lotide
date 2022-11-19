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
 * Function that evaluates two provided objects for equality
 * @param {Object} object1 - The first object to evaluate
 * @param {Object} object2 - The second object to evaluate
 * @returns {boolean} The outcome of the evaluation
 */
const eqObjects = (object1, object2) => {
  // Evaluate for undefined arguments
  if (object1 instanceof Object === false || object2 instanceof Object === false) return;
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

/**
 * Function that compares 2 objects for equality and prints out a
 * message telling us if they match or not
 * @param {Object} actual - The first item to compare
 * @param {Object} expected - The second item to compare
 */
const assertObjectsEqual = (object1, object2) => {
  
  return console.log(printAssertEqualResult(eqObjects(object1, object2), object1, object2));
};

// Test cases: Primitives as property values
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

// Test cases: Arrays in property values
const obj1 = { c: "1", d: ["2", 3] };
const obj2 = { d: ["2", 3], c: "1" };
assertObjectsEqual(obj1, obj2); // => true

const obj3 = { c: "1", d: ["2", 3] };
const obj4 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(obj3, obj4); // => false