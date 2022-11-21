/**
 * Function that returns all but the first element from an array, or
 * undefined if the array was empty. If the array is empty or only has
 * one element, it returns an empty array
 * @param {Array} array - An array containing one or more elements
 * @returns {Array} All but the first element from the array, or an empty
 * array
 */
const tail = (array) => {
  return Array.isArray(array) && array.length > 0 ? array.slice[1] : undefined;
};

module.exports = tail;