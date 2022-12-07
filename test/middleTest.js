const middle = require('../middle');
const assert = require('chai').assert;

describe('#middle', () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [2] for [5, 3, 5, 2, 1, 8, 3]", () => {
    assert.deepEqual(middle([5, 3, 5, 2, 1, 8, 3]), [2]);
  });

  it("returns [3, 6] for [1, 2, 3, 6, 7, 8]", () => {
    assert.deepEqual(middle([1, 2, 3, 6, 7, 8]), [3, 6]);
  });

  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
})

