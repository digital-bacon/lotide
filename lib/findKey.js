/**
 * Function that scans an object and returns the first key for which
 * the callback/predicate returns a truthy value. If no key is found,
 * then it returns `undefined`.
 * @param {Object} object - The object from which to find a key
 * @param {Function} action - The callback function that is used to
 * evaluate the keys
 * @returns {string|undefined} The name of the key, or undefined if
 * none was found
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

module.exports = findKey;