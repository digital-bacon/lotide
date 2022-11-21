const eqArrays = require('./eqArrays');

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

// // Test cases: Primitives as property values
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false

// // Test cases: Arrays in property values
// const obj1 = { c: "1", d: ["2", 3] };
// const obj2 = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(obj1, obj2), true); // => true

// const obj3 = { c: "1", d: ["2", 3] };
// const obj4 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(obj3, obj4), false); // => false

module.exports = eqObjects;