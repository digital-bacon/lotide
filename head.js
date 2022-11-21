/**
 * Function that returns the first element from an array, or undefined
 * if the array was empty
 * @param {Array} array - An array containing one or more elements
 * @returns {*|undefined} The first element from the array, or undefined
 */
const head = (array) => {
  if (!Array.isArray(array)) return undefined;
  if (array.length <= 0) return undefined;
  const result = array[0];
  return result;
}

module.exports = head;