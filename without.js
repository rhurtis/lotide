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

Implement without which will return a subset of a given array, removing unwanted elements.

*/

const without = function(source,itemsToRemove) {
  let source2 = [...source];
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        source2.splice(i,1);
      }
    }
  }
  return source2;
};

// basic testing
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]


//testing with assertArraysEquals
assertArraysEqual(without([3,2,1],[1]),[3,2]);// should print identical


// testing to see if original array has changed
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
