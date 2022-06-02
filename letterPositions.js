/*function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.

For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.*/

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

//letterPosition function
const letterPositions = function (sentence) {
  const result = {};

  //eliminate the space between words
  sentence = sentence.replace(/[^a-zA-Z0-9]/g, ''); //g is globaly, regular expression

  for (let i = 0; i < sentence.length; i++) {
    if (result[sentence[i]] === undefined) {
      result[sentence[i]] = [i];
    } else {
      result[sentence[i]].push(i);
    }
  }
  return result;
};

//===TEST CODE===
console.log(letterPositions('lighthouse in the house'));
/* { 
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
} */
//letterPositions('lighthouse in the house');
// l i g h t h o u s e .  i  n  .  t  h  e  .  h  o  u  s  e
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22
