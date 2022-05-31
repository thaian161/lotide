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

// ===TEST CODE===
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); //true
console.log(assertArraysEqual([1, 4, 3], [1, 2, 3])); //false
console.log(assertArraysEqual([1, 2, 3, 6, 7], [1, 2, 3])); //false
