import {assertEqual} from './assertEqual.js';

/**
 * Function that returns the first element from an array, or undefined
 * if the array was empty
 * @param {Array} array - An array containing one or more elements
 * @returns {*} The first element from the array
 */
const head = (array) => Array.isArray(array) && array.length > 0 ? array[0] : undefined;

// TEST CASES
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head(), undefined);