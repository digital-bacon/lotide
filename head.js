const assertEqual = require('./assertEqual');

/**
 * Function that returns the first element from an array, or undefined
 * if the array was empty
 * @param {Array} array - An array containing one or more elements
 * @returns {*|undefined} The first element from the array, or undefined
 */
const head = (array) => Array.isArray(array) && array.length > 0 ? array[0] : undefined;

module.exports = head;