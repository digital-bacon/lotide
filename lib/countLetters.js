/**
 * Function that counts the total instances of a letter in a string
 * @param {string} string - The string containing the elements you
 * wish to count
 * @returns {Object} An object with characters from `string` as
 * value labels, and the total instances of that character as the value
 */
const countLetters = (string) => {
  const results = {};
  if (typeof string !== 'string') return results;
  // Look at each element in the string
  const stringAsArray = string.split('');
  for (const element of stringAsArray) {
    const keyLabel = element;
    // Don't count spaces
    if (keyLabel === ' ') continue;
    // If the element is not yet a key in `results`, create it
    if (!results[keyLabel]) results[keyLabel] = 0;
    // Increment the count of this element in the results object by 1
    // If the element doesn't exist in the results object, create it
    results[element]++;
  }
  return results;
};

module.exports = countLetters;