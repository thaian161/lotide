//A function that can compare two arrays for a perfect match

// assertEqual function
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️✔️: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌: ${actual} !== ${expected}`);
  }
};

//Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
// const eqArrays = function (arr1, arr2) {
//   if (
//     arr1.length === arr2.length &&
//     arr1[0] === arr2[0] &&
//     arr1[1] === arr2[1] &&
//     arr1[2] === arr2[2]
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// };

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

//===TEST CODE===
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(['1', '2', '3'], ['1', '2', '3'])); // => true
console.log(eqArrays(['1', '2', '3'], ['1', '2', 3])); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
