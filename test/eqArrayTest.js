const eqArrays = require('../eqArray');
const assertEqual = require('../assertEqual');

// Tests



assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // should fail
assertEqual(eqArrays(['1','2', '3'], ['1', '2', '3']), true);// should pass
assertEqual(eqArrays(['1',' 2', '3'], ['1', '2', 3]), true);//should fail
