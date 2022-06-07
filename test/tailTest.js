const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;

// ===TEST CODE===
describe('#tail', () => {
  it('returns [2,3] for [1, 2, 3]', () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it('return ["hai", "thyan"] for ["ann", "hai", "thyan"]', () => {
    assert.deepEqual(tail(['ann', 'hai', 'thyan']), ['hai', 'thyan']);
  });
});

// console.log(tail([1, 2, 3, 4, 5]));
// console.log(tail(['ann', 'hai', 'thyan']));

// // Workaround the limitation of asserEqual cannot compare array with array, array is a type of Object
// const result = tail(['Hello', 'Lighthouse', 'Labs']);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], 'Lighthouse'); // ensure first element is "Lighthouse"
// assertEqual(result[1], 'Labs'); //
