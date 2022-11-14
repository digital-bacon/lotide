/**
 * Function that compares 2 values for equality and prints out a
 * message telling us if they match or not
 * @param {string|number|boolean|Array<string|number|boolean>} actual - The first item to compare
 * @param {string|number|boolean|Array<string|number|boolean>} expected - The second item to compare
 * @returns {string} Prints message with match outcome
 */
 const assertEqual = (actual, expected) => {
  let hasEquality = false;
  // If the items being asserted are arrays...
  if (Array.isArray(actual) && Array.isArray(expected)) {
    // Ensure length of the array is as expected
    if (actual.length === expected.length) {
      // Evaluate each element for equality
      let totalEqualElements = 0;
      for (const element in expected) {
        if (element !== actual[element]) totalEqualElements++;
      }
      if (totalEqualElements === expected.length) hasEquality = true;
    }
  // If the items being asserted are not arrays or objects
  } else {
    if (actual === expected) hasEquality = true;
  }
  if (hasEquality) {
    console.log(`\n\x1b[32mTEST PASSED🥳🥳🥳\n\x1b[36mresult:\n\x1b[0m`, actual, `\n\x1b[36mexpected:\x1b[0m\n`, expected, `\n\n----------`);
  } else {
    console.log(`\n\x1b[33mTEST FAILED💥💥💥\n\x1b[36mresult:\n\x1b[0m`, actual, `\n\x1b[36mexpected:\x1b[0m\n`, expected, `\n\n----------`);
  }
};

/**
 * Function that returns the first element from an array, or undefined
 * if the array was empty
 * @param {Array} array - An array containing one or more elements
 * @returns {*} The first element from the array
 */
const head = (array) => Array.isArray(array) && array.length > 0 ? array[0] : undefined;

// TEST CASES
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head(), undefined);