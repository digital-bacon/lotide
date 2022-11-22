/**
 * Function that receives a string, and returns an object with a key
 * for each unique character, as well the character positions in the
 * string
 * @param {string} sentence - The string to analyze
 * @returns {Object} An object with a key matching each unique
 * character, and where to find them in the sentence
 */
const letterPositions = function(sentence) {
  const results = {};
  if (typeof sentence !== 'string') return results;
  // Look at each index
  for (const index in sentence) {
    let keyName = sentence[index];
    // Don't count spaces
    if (keyName === ' ') continue;
    // If the index is not yet a key in `results`, create it
    if (!results[keyName]) results[keyName] = [];
    // Record the index in the results
    results[sentence[index]].push(Number(index));
  }
  return results;
};

module.exports = letterPositions;