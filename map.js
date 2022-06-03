/*Our map function will take in two arguments:
    - An array to map
    - A callback function
The map function will return a new array based on the results of the callback function.*/

//map function
const map = function (array, callback) {
  // temporary code:
  console.log('array: ', array);
  console.log('callback: ', callback);

  const results = [];
  for (let item of array) {
    results.push(callback(item));
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
  }
  return results;
};
const words = ['ground', 'control', 'to', 'major', 'tom'];
const results1 = map(words, (word) => word[0]);
console.log(results1);
