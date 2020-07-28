// // These functions and tests are no longer needed because we are now using Chai and Mocha. However they are tested here using Chai/Mocha.

const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe("#assertArraysEqual", () => {
  
  it("returns identical for [1,2,3] and [1,2,3]", () => {
    assert.strictEqual(assertArraysEqual([1,2,3],[1,2,3]),console.log("The arrays are identical."));
  });

  it("returns not identical for [1,2,3] and [1,3,4]", () => {
    assert.strictEqual(assertArraysEqual([1,2,3],[1,3,4]),console.log("The arrays are not identical."));
  });
  
});


