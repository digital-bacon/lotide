/**
 * Function that returns a slice of the provided array with elements
 * taken from the beginning, up until the callback/predicate returns
 * a truthy value
 * @param {Array} array - The array from which to slice elements
 * @param {Function} callback - The predicate function determines when
 * to stop slicing elements from the array
 * @returns {Array} The elements that were sliced from the input array
 */
const takeUntil = function(array, callback) {
  // Create a way to store the results
  let output = [];
  // Get the stopping point for the slice from the callback
  const stopAtIndex = array.findIndex(callback);
  // Extract the items using the new rules
  output = array.slice(0, stopAtIndex);
  // Return the new array
  return output;
};

// // TEST CASES
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// // Evaluate result against expected result
// assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]); // => True

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// // Evaluate result against expected result
// assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]); // => True

module.exports = takeUntil;