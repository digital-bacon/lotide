/**
 * Function that copies the `source` array, while excluding items that
 * are found in the `removeItems` array
 * @param {Array<string|number|boolean>} sourceItems - The array to be copied
 * @param {Array<string|number|boolean>} removeItems - An array of items to not include in the
 * returned array
 * @returns {Array} The copied array
 */
const without = (sourceItems, removeItems) => {
  let output = [];
  for (const sourceItem of sourceItems) {
    if (!removeItems.includes(sourceItem)) {
      output.push(sourceItem);
    }
  }
  // Return the new array
  return output;
};

module.exports = without;