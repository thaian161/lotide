// Function to retrieve every element except the head (first element) of the array.
// Lodash: https://lodash.com/docs/4.17.15#tail

// asserEqual function
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️✔️: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌: ${actual} !== ${expected}`);
  }
};

//Tail function
const tail = function (array) {
  return array.slice(1);
};

// ===TEST CODE===
console.log(tail([1, 2, 3, 4, 5]));
console.log(tail(['ann', 'hai', 'thyan']));

// Workaround the limitation of asserEqual cannot compare array with array, array is a type of Object
const result = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], 'Lighthouse'); // ensure first element is "Lighthouse"
assertEqual(result[1], 'Labs'); //
