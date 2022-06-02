// Function search for a key on an object where its value matches a given value.
// Lodash: https://lodash.com/docs/4.17.15#findKey

//assertEqual function
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️✔️: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌: ${actual} !== ${expected}`);
  }
};

// USING Object.entries
// findKeyByValue = (obj, valueOfObj) => {
//   for (const [key, value] of Object.entries(obj)) {
//     if (value === valueOfObj) {
//       return key;
//     }
//   }
//   return undefined;
// };

//USING FOR...IN LOOP
// findKeyByValue function
findKeyByValue = (obj, valueOfObj) => {
  for (const key in obj) {
    if (obj[key] === valueOfObj) {
      return key;
    }
  }
  return undefined;
};

//===TEST CODE===
const bestTVShowsByGenre = {
  sci_fi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire',
};

assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
