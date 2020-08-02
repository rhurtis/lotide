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
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {

  
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;


// // First test case: using map normally
// const results1 = map(words, word => word[0]);
// //console.log(results1);
// assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ]);

// // second test case: Using map inline
// assertArraysEqual(map(['hello','world','how','are','you'], word => word[0]),['h','w','h','a','y']);

// //third test case: Using map with variables
// let word2 = ['the','real','slim','shady'];
// let callbackFcn = word => word[0];
// assertArraysEqual(map(word2,callbackFcn),['t','r','s','s']);
