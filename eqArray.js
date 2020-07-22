// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😞 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/*

Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

*/


const eqArrays = function(array1,array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i=0;i < array1.length; i++) {
       if(array1[i] !== array2[i]) {
        return false;
    }
  }
return true;
 
};

//console.log(eqArrays([1, 2, 3], [1, 2, 3]));
// Tests



assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // should fail
assertEqual(eqArrays(['1','2', '3'], ['1', '2', '3']), true);// should pass
assertEqual(eqArrays(['1',' 2', '3'], ['1', '2', 3]), true);//should fail
