const eqArrays = require('./eqArray');

/*

Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.

*/

const assertArraysEqual = function(array3,array4) {
  if (eqArrays(array3,array4) === true) {
    return console.log("The arrays are identical.");
  } else {
    return console.log("The arrays are not identical.");
  }
};

module.exports = assertArraysEqual;