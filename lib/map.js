/**
 * Function that will take in two arguments, an array to map, and a
 * callback function. The function will return a new array based on
 * the results of the callback function.
 * @param {Array} array - An array to map
 * @param {Function} callback - A callback function to call against
 * each item in the array
 * @returns {Array} An array with the results of the callback function
 */
const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;