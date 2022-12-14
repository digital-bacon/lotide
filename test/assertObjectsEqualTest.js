const assertObjectsEqual = require('../lib/assertObjectsEqual');

// TEST CODE
// Test cases: Primitives as property values
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

// Test cases: Arrays in property values
const obj1 = { c: "1", d: ["2", 3] };
const obj2 = { d: ["2", 3], c: "1" };
assertObjectsEqual(obj1, obj2); // => true

const obj3 = { c: "1", d: ["2", 3] };
const obj4 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(obj3, obj4); // => false