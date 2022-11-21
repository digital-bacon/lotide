/**
 * Function that flattens an array with any number of nested arrays
 * @param {Array} array - The array of elements to flatten
 * @param {Array} [buffer] - used as a pass-through value for recursion
 * @returns {Array} The flattened array
 */
const flatten = (array) => {
  let buffer = [];
  if (typeof buffer === 'undefined') buffer = [];
  // Loop through an existing array of items
  for (const item of array) {
    // If a nested array is found
    if (Array.isArray(item) === false) {
      buffer.push(item);
    } else {
      // Recursively flatten all nested elements at this index
      const result = flatten(item, buffer);
      buffer = buffer.concat(result);
    }
  }
  return buffer;
};

// // Test Case: 1 nested level of sub-arrays
// assertObjectsEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]
// // // Test Case: 2 nested levels of sub-arrays
// assertObjectsEqual(flatten([1, 2, [3, [1, 2, 3]], 4, 5, [6]]), [1, 2, 3, 1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]
// // // Test Case: 3 nested levels of sub-arrays
// assertObjectsEqual(flatten([1, 2, [3, [1, 2, 3, [1, 2, 3]]], 4, 5, [6]]), [1, 2, 3, 1, 2, 3, 1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]

// // // Test Case: objects as array elements
// console.log(flatten([1, 2, {apple: 3, orange: 4}, 5, [6]]),  [1, 2, {apple: 3, orange: 4}, 5, 6]); // => [1, 2, 3, 4, 5, 6]

module.exports = flatten;