// These functions and tests are no longer needed because we are now using Chai and Mocha. However they are tested here using Chai/Mocha.

const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#assertEqual", () => {
  
  it("returns assertion passed for 1 and 1", () => {
    assert.equal(assertEqual(1,1),console.log(`😀 Assertion Passed: 1 === 1`));
  });

  it("returns assertion failed for 1 and 2", () => {
    assert.equal(assertEqual(1,2),console.log(`😞 Assertion Failed: 1 !== 2`));
  });
  
  it("returns assertion failed for Lighthouse Labs and Bootcamp", () => {
    assert.equal(assertEqual('Lighthouse Labs','Bootcamp'),console.log(`😞 Assertion Failed: 'Lighthouse Labs' !== 'Bootcamp'`));
  });

  it("returns assertion passed for Lighthouse Labs and Lighthouse Labs", () => {
    assert.equal(assertEqual('Lighthouse Labs','Lighthouse Labs'),console.log(`😀 Assertion Passed: 'Lighthouse Labs' === 'Lighthouse Labs'`));
  });
});

