const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

//assertArraysEqual function
const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✔️✔️✔️: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌: ${arr1} !== ${arr2}`);
  }
};

module.exports = eqArrays;
module.exports = assertArraysEqual;
