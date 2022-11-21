const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// Test cases:
// Edge tests
assertArraysEqual(middle([1]), []); // True
assertArraysEqual(middle([1, 2]), []); // True

// Return single element for arrays with odd number of elements
assertArraysEqual(middle([1, 2, 3]), [2]); // True
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // True

// Return two elements for arrays with even number of elements
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // True
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // True