/*The console.log(middle function should return an array with only the console.log(middle element(s) of the provided array.
  Arrays with one or two elements, there is no console.log(middle 
    => Return an empty array

  Arrays with odd number of elements
    => Return 1 element in the console.log(middle

  Arrays with an even number of elements 
    => Return 2 element in the console.log(middle
*/

// eqArays function
const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

//assertArraysEqual function
const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✔️✔️✔️: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌: ${arr1} !== ${arr2}`);
  }
};

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

// ===TEST CODE===
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
