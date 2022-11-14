/**
 * Function that compares 2 values for equality and prints out a
 * message telling us if they match or not
 * @param {string|number} actual - The first item to compare
 * @param {string|number} expected - The second item to compare
 * @returns {string} Prints message with match outcome
 */
 const assertEqual = (actual, expected) => {
  if (actual === expected) {
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
const head = (array) => {

}

// TEST CASES
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");