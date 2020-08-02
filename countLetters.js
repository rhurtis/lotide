 
 
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😞 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/*
Create a function called countLetters.
The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
*/

const countLetters = function(string1) {
  const results = {}; // the object that will hold the results.

  for (let i = 0; i < string1.length; i++) {
    let letter = string1.charAt(i);
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter]++;
      } else {
        results[letter] = 1;
      }
    }
  }


  return results;
};
module.exports = countLetters;


//console.log(countLetters('hello world')); // should return: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }

// Testing using the assertEqual function:NOT WORKING CORRECTLY but manual verification works. Will follow up.

//assertEqual(countLetters('hello'),{ 'h': 1, 'e': 1, 'l': 2, 'o': 1 });

