/*Function to filter our data by removing some unwanted items from given array.

This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.*/
// Lodash: https://lodash.com/docs/4.17.15#without

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

//without function
const without = function (source, itemsToRemove) {
  let newArr = [];
  for (const element of source) {
    if (!itemsToRemove.includes(element)) {
      newArr.push(element);
    }
  }
  return newArr;
};

// ===TEST CODE===
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(['1', '2', '3'], [1, 2, '3'])); // => ["1", "2"]

const words = ['hello', 'world', 'lighthouse'];
without(words, ['lighthouse']); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ['hello', 'world', 'lighthouse']);
