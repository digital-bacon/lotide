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
  // Look at each index
  loopSentence:
  for (const index in sentence) {
    let keyName = sentence[index];
    // Don't count spaces
    if (keyName === ' ') continue loopSentence;
    // If the index is not yet a key in `results`, create it
    if (!results[keyName]) results[keyName] = [];
    // Record the index in the results
    results[sentence[index]].push(Number(index));
  }
  return results;
};

// // Test case

// const testInput = 'lighthouse in the house';
// const expectedResult = {
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// };

// assertArraysEqual(letterPositions(testInput).l, expectedResult.l);
// assertArraysEqual(letterPositions(testInput).i, expectedResult.i);
// assertArraysEqual(letterPositions(testInput).g, expectedResult.g);
// assertArraysEqual(letterPositions(testInput).h, expectedResult.h);
// assertArraysEqual(letterPositions(testInput).t, expectedResult.t);
// assertArraysEqual(letterPositions(testInput).o, expectedResult.o);
// assertArraysEqual(letterPositions(testInput).u, expectedResult.u);
// assertArraysEqual(letterPositions(testInput).s, expectedResult.s);
// assertArraysEqual(letterPositions(testInput).e, expectedResult.e);
// assertArraysEqual(letterPositions(testInput).n, expectedResult.n);

module.exports = letterPositions;