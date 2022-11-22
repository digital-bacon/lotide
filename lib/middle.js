/**
 * Function that evaluates a number as even
 * @param {number} number - The number to evaluate as even
 * @returns {boolean} The outcome of the evaluation
 */
const isEven = number => {
  if (number <= 0) {
    return number === 0 ? true : false;
  } else {
    return isEven(number - 2);
  }
};

/**
 * Function that returns the middel elemet(s) from an array, or undefined
 * if the array was empty
 * @param {Array} array - An array containing three or more elements
 * @returns {*|undefined} The first element from the array, or undefined
 */
const middle = (array) => {
  // We can only get middle from arrays with at least 3 elements
  if (!Array.isArray(array) || array.length < 3) return [];
  let middle = []; // To store the result
  // Get the item at the middle index
  middle.push(Math.ceil(array.length / 2));
  // Return two elements for arrays with even number of elements
  if (isEven(array.length)) {
    middle.push(Math.ceil((array.length + 1) / 2));
  }
  // Return the result
  return middle;
};

module.exports = middle;