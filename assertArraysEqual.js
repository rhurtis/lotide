const eqArrays = function(array1,array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
 
};

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

assertArraysEqual([1,2,3],[1,3,4]); // should show not identical
assertArraysEqual([1,2,3],[1,2,3]); // should show identical