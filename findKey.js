/**
 * Function that scans an object and returns the first key for which
 * the callback/predicate returns a truthy value. If no key is found,
 * then it returns `undefined`.
 * @param {Object} object - The object from which to find a key
 * @param {Function} action - The callback function that is used to
 * evaluate the keys
 */
const findKey = (object, action) => {
  // Loop through the properties in the object
  for (const key in object) {
    // Perform callback on the key
    if (action(object[key])) {
      return key; // Key is a match, return the name of the key
    }
  }
};

// // Test case:
// const testCaseObject = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// };
// const testLogic = x => x.stars === 2;
// assertEqual(findKey(testCaseObject, testLogic), "noma");

module.exports = findKey;