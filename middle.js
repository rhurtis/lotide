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

Implement middle which will take in an array and return the middle-most element(s) of the given array.

*/

const middle = function(midArray) {
  
  if (midArray.length === 2 || midArray.length === 1) {
    return [];
  } else if (midArray.length % 2 === 0) {
    let index1 = Math.floor((midArray.length - 1) / 2);
    return midArray.slice(index1,index1 + 2);  // return the two elements in the middle
   
  } else if (midArray.length % 2 !== 0) {
    let answerArray = [];
    answerArray.push(midArray[((midArray.length - 1) / 2)]);// return the element in the middle
    return answerArray;
  }
};

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