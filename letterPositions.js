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
Implement a function called letterPositions.

We'll implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.
*/

const letterPositions = function(sentence) {
  const results = {};
  
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence.charAt(i);
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
  }
  return results;
};

console.log(letterPositions('lighthouse in the house'));

//testing with the assertArraysEqual function:
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").h, [0]);