/* Function that take in two parameters:
    - The array to work with
    - The callback
The function will return a "slice of the array with elements taken from the beginning." 
It should keep going until the callback/predicate returns a truthy value.
*/
// Lodash: https://lodash.com/docs/4.17.15#takeWhile

//takeUntil function
const takeUntil = (arr, cb) => {
  let result = [];
  arr.map((element, index) => {
    if (cb(element)) {
      result = arr.slice(0, index);
    }
  });
  return result;
};

//===TEST CODE ===
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);
//[ 1, 2, 5, 7, 2 ]

const data2 = [
  "I've",
  'been',
  'to',
  'Hollywood',
  ',',
  "I've",
  'been',
  'to',
  'Redwood',
];
const results2 = takeUntil(data2, (x) => x === ',');
console.log(results2);
//[ 'I\'ve', 'been', 'to', 'Hollywood' ]
