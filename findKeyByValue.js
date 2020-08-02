const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😞 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/*

Implement the function findKeyByValue which takes in an object and a value.
It should scan the object and return the first key which contains the given value.
If no key with that given value is found, then it should return undefined.

*/

const findKeyByValue = function(object1,value1) {

  for (let i in object1) {
    if (object1[i] === value1) {
      return i;
    }
  }
  

};

module.exports = findKeyByValue;

// // testing using the assertEqual function.

// let testObj = { 'colour': 'red', 'shape': 'ball', 'size': 'large'};
// let testValue1 = 'red';
// let testValue2 = 'ball';
// let testValue3 = 'large';

// assertEqual(findKeyByValue(testObj,testValue1), 'colour');
// assertEqual(findKeyByValue(testObj,testValue2), 'shape');
// assertEqual(findKeyByValue(testObj,testValue3), 'size');


// const bestTVShowsByGenre = {
//   sciFi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);