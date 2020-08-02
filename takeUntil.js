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

const assertArraysEqual = function(array3,array4) {
  if (eqArrays(array3,array4) === true) {
    return console.log("The arrays are identical.");
  } else {
    return console.log("The arrays are not identical.");
  }
};

/*
Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.
*/

const takeUntil = function(array, callback) {
  //need a way to keep collecting the items from the provided array
  let collection = [];
  // need to iterate through the provided array; will use for..of loop
  for (let item of array) {
    //need a way to check whether each element is truthy/falsey; will use if/else statement
    if (callback(item) != true) {
      collection.push(item);
    } else {
      return collection; // This will return the array and break out of the loop.
    }
  }
  return collection; //This will return the entire array if there are no truthy values detected within the for..of loop.
};

module.exports = takeUntil;


// // EXPECTED INPUT
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);
// assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ]); // Using the assertArraysEqual function
// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);
// assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]); // Using the assertArraysEqual function
// console.log('---');

// //A case where the are no truthy values.
// const data3 = [1,2,3,4];
// const results3 = takeUntil(data3, x => x < 0);
// console.log(results3);
// assertArraysEqual(results3,[ 1, 2, 3, 4]); // Using the assertArraysEqual function

// /* EXPECTED OUTPUT
// [ 1, 2, 5, 7, 2 ]
// The arrays are identical.
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]
// The arrays are identical.
// ---
// [ 1, 2, 3, 4]
// The arrays are identical.

// */



