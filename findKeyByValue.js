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

// const bestTVShowsByGenre = {
//   sciFi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;