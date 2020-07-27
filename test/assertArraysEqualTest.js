
const assertArraysEqual = require('../assertArraysEqual');



// Test
assertArraysEqual([1,2,3],[1,3,4]); // should show not identical
assertArraysEqual([1,2,3],[1,2,3]); // should show identical