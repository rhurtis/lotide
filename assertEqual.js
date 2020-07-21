// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😞 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");// non-identical strings
assertEqual(1, 1);// identical numbers
assertEqual("Lighthouse Labs", "Lighthouse Labs");// identical strings
assertEqual(1, 2);// non-identical numbers
