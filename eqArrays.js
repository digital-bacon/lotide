/**
 * Function that compares 2 values for equality and prints out a
 * message telling us if they match or not
 * @param {string|number|boolean|Array<string|number|boolean>} actual - The first item to compare
 * @param {string|number|boolean|Array<string|number|boolean>} expected - The second item to compare
 * @returns {string} Prints message with match outcome
 */
const eqArrays = (actual, expected) => {
  let hasEquality = false;
  // If the items being asserted are arrays...
  if (Array.isArray(actual) && Array.isArray(expected)) {
    // Ensure length of the arrays are as expected
    if (actual.length === expected.length) {
      // Evaluate each element for equality
      let totalEqualElements = 0;
      for (let element = 0; element < expected.length; element++) {
        if (actual[element] === expected[element]) totalEqualElements++;
      }
      if (totalEqualElements === expected.length) hasEquality = true;
    }
  }
  if (hasEquality) {
    console.log(`\n\x1b[32mTEST PASSED🥳🥳🥳\n\x1b[36mresult:\n\x1b[0m`, actual, `\n\x1b[36mexpected:\x1b[0m\n`, expected, `\n\n----------`);
  } else {
    console.log(`\n\x1b[33mTEST FAILED💥💥💥\n\x1b[36mresult:\n\x1b[0m`, actual, `\n\x1b[36mexpected:\x1b[0m\n`, expected, `\n\n----------`);
  }
};

/**
 * Function that flattens an array of any depth to single-dimensional
 * @param {Array} array - The array to flatten
 * @returns {Array} The flattened, single-dimensional, array
 */
 const flattenArray = (array) => array.flat(Infinity);

// TEST CODE
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false