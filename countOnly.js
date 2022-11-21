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

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;