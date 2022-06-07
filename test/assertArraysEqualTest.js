const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

// ===TEST CODE===
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); //true
console.log(assertArraysEqual([1, 4, 3], [1, 2, 3])); //false
console.log(assertArraysEqual([1, 2, 3, 6, 7], [1, 2, 3])); //false
