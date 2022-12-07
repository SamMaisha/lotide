const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    let result1 = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result1, ["Lighthouse", "Labs"]);
  });
  it("returns [2,3] for [1,2,3]", () => {
    let result2 = tail([1, 2, 3]);
    assert.deepEqual(result2, [2, 3]);
  });

})
