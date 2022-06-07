const assertEqual = require('../assertEqual');
const tail = require('../tail');

// ===TEST CODE===
console.log(tail([1, 2, 3, 4, 5]));
console.log(tail(['ann', 'hai', 'thyan']));

// Workaround the limitation of asserEqual cannot compare array with array, array is a type of Object
const result = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], 'Lighthouse'); // ensure first element is "Lighthouse"
assertEqual(result[1], 'Labs'); //
