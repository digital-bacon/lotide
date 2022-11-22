/**
 * Function that when given an array and an object, it will return an
 * object containing counts of everything that the input object listed
 * @param {Array<string>} allItems - Array of strings to look through
 * @param {Object} itemsToCount - Object with key value pairs
 * specifying what to count
 * @param {string} itemsToCount.key - All keys in itemsToCount
 * match the value to find as the key name, with a boolean value
 * indicating if the name will be counted. For example, to count `John`
 * assign a property in `itemsToCount` of `John: true`
 * @returns {Object} A list of values found, and their total occurrences
 * @example When `allitems` is `['Karl', 'Fang', 'Salima', 'Fang']` and
 * `itemsToCount` is `{ Karl: false, Salima: true, Fang, true}` the
 * result will be `{ Salima: 1, Fang: 2 }`
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

module.exports = countOnly;