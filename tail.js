import {assertEqual} from './assertEqual.js';

/**
 * Function that returns all but the first element from an array, or
 * undefined if the array was empty
 * @param {Array} array - An array containing one or more elements
 * @returns {*} All but the first element from the array
 */
const tail = (array) => {

}

// TEST CASES
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!