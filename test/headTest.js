const assertEqual = require('../assertEqual');
const head = require('../head');
const assert = require('chai').assert;

// ===TEST CODE===
describe('#head', () => {
  it('returns 1 for [1, 2, 3]', () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it('return "Hello" for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
});

// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
