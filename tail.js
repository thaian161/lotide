const assertEqual = require('./assertEqual');

// Function to retrieve every element except the head (first element) of the array.
// Lodash: https://lodash.com/docs/4.17.15#tail

//Tail function
const tail = function (array) {
  return array.slice(1);
};

module.exports = tail;
