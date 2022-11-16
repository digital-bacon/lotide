/**
 * Function that compares 2 arrays for equality and prints out a
 * message telling us if they match or not
 * @param {Array<string|number|boolean>} actual - The first item to compare
 * @param {Array<string|number|boolean>} expected - The second item to compare
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
        // Evaluate element type equality
        if (actual[element] === expected[element]) totalEqualElements++;
      }
      // If the total equal elements matches expected, we have equality
      if (totalEqualElements === expected.length) hasEquality = true;
    }
  }
  // Print the outcome!
  if (hasEquality) {
    console.log(`\n\x1b[32mTEST PASSED🥳🥳🥳\n\x1b[36mresult:\n\x1b[0m`, actual, `\n\x1b[36mexpected:\x1b[0m\n`, expected, `\n\n----------`);
  } else {
    console.log(`\n\x1b[33mTEST FAILED💥💥💥\n\x1b[36mresult:\n\x1b[0m`, actual, `\n\x1b[36mexpected:\x1b[0m\n`, expected, `\n\n----------`);
  }
};

// TEST CODE
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false