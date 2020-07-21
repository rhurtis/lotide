const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😞 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const tail = function(array1) {
  if (array1.length === 1) {
    return [];
  } else {
    return array1.slice(1);
  }
  
};

// Testing to make sure original array is not modified.
let testArray = [1,2,3];
console.log(tail(testArray));
console.log(testArray);
console.log(tail([]));
console.log(tail([1]));

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
