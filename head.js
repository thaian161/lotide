const asserEqual = require('./assertEqual');

// Function to retrieve the first element from the array
// Lodash: https://lodash.com/docs/4.17.15#head

//head function
const head = function (array) {
  return array[0];
};

// ===TEST CODE===
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
