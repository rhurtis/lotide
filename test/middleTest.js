const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// TESTS
console.log(middle([1])); // returns []
console.log(middle([1, 2])); // returns []
console.log(middle([1, 2, 3])); // returns [2]
console.log(middle([1, 2, 3, 4, 5])); // returns [3]
console.log(middle([1, 2, 3, 4])); // returns [2,3]
console.log(middle([1, 2, 3, 4, 5, 6])); //returns [3,4]


// TESTS WITH ASSERTION FUNCTION
assertArraysEqual(middle([1]),[]); // returns identical
assertArraysEqual(middle([1, 2, 3, 4]),[2,3]); //returns identical