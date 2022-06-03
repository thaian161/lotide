/* Since assertEqual can really only be used for checking primitive return types. Therefore, we will write a function named eqObjects to take in two objects and returns true or false, based on a perfect match.

HINT: two objects are equal when:
  - Having the same number of keys
  - The value for each key in one object is the same as the value for that same key in the other object
  - Having same amount of key => Object.keys.length
*/

//asserEqual function
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️✔️: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌: ${actual} !== ${expected}`);
  }
};

//eqArray function
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

//eqObjects function
eqObjects = (object1, object2) => {
  for (const [key1, value1] of Object.entries(object1)) {
    for (const [key2, value2] of Object.entries(object2)) {
      if (
        key1 === key2 &&
        eqArrays(value1, value2) &&
        Object.keys(object1).length === Object.keys(object2).length
      ) {
        return true;
      }
    }
  }
  return false;
};

//===TEST CODE===
const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: '1', b: '2', c: '3' };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: '1', d: ['2', 3] };
const dc = { d: ['2', 3], c: '1' };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: '1', d: ['2', 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

const an = { a: '1', b: 2 };
const hai = { b: 2, a: 5 };
console.log(eqObjects(an, hai)); //false
