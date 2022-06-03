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

// assertObjectsEqual function
const assertObjectsEqual = (actual, expected) => {
  //use the util library's inspect function
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✔️✔️✔️: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }); // ✔️✔️✔️
assertObjectsEqual({ a: '1', b: '2' }, { a: '1', b: '2', c: '3' }); // ❌❌❌
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: 5 }); // ❌❌❌
