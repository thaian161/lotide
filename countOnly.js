//This function should take in a collection of items and return counts for a specific subset of those items. countOnly will be given an array and an object. It will return an object containing counts of everything that the input object listed.

//assertEqual function
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️✔️: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌: ${actual} !== ${expected}`);
  }
};

// countOnly Function
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (firstNameArray, namesToCount) {
  const results = {};
  for (const name of firstNameArray) {
    //console.log(item);
    //console.log(results[item]);
    if (namesToCount[name]) {
      if (results[name]) {
        results[name] += 1;
      } else {
        results[name] = 1;
      }
    }
    console.log('result', results);
  }
  return results;
};

//===TEST CODE===
const firstNames = [
  'Karl',
  'Salima',
  'Agouhanna',
  'Fang',
  'Kavith',
  'Jason',
  'Salima',
  'Fang',
  'Joe',
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

console.log(result1);
// assertEqual(result1['Jason'], 1);
// assertEqual(result1['Karima'], undefined);
// assertEqual(result1['Fang'], 2);
// assertEqual(result1['Agouhanna'], undefined);
