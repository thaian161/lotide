const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

/*The console.log(middle function should return an array with only the console.log(middle element(s) of the provided array.
  Arrays with one or two elements, there is no console.log(middle 
    => Return an empty array

  Arrays with odd number of elements
    => Return 1 element in the console.log(middle

  Arrays with an even number of elements 
    => Return 2 element in the console.log(middle
*/

//middle function
const middle = function (arr) {
  let result = [];
  if (arr.length === 1 || arr.length === 2) {
    return result;
  }
  if (arr.length % 2 === 0) {
    let midNum1 = arr[arr.length / 2 - 1];
    let midNum2 = arr[arr.length / 2];
    result.push(midNum1, midNum2);
  }
  if (arr.length % 2 !== 0) {
    let midNUm = arr[Math.floor(arr.length / 2)];
    result.push(midNUm);
  }
  return result;
};

module.exports = middle;
