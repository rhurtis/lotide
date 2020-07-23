const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😞 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const eqObjects = function(object1, object2) {
  let falseCounter = 0;
  let passCounter = 0;
  if ((Object.keys(object1)).length === (Object.keys(object2)).length) {
    //console.log('the objects are the same length');
    for (let i in object1) {
      if (Array.isArray(object1[i]) === true) {
        //console.log('this is an array:',i);
        if (eqArrays(object1[i],object2[i]) === true) {
          //console.log('the arrays are equal:',i);
          passCounter++;
            
            
        } else {
          // console.log('the arrays are not equal:',i);
          falseCounter++;
            
        }
      } else {
        if (object1[i] === object2[i])
           
        // console.log('the object key/value is not an array but they are equal:',i);
          passCounter++;
      }
    }
  } else {
    return false;
         
  }
  if (falseCounter > 0) {
    return false;
  } else {
    return true;
  }

};


/*
Implement assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.
The message printed to the console should be similar to that of assertArraysEqual.
 In fact, you could refer to the code for assertArraysEqual to help you implement this.
 Instead of doing an eqArrays check though, this assertion function will make use of your eqObjects function for object comparison.
*/



/*

const assertArraysEqual = function(array3,array4) {
  if (eqArrays(array3,array4) === true) {
    return console.log("The arrays are identical.");
  } else {
    return console.log("The arrays are not identical.");
  }
};


*/

const assertObjectsEqual = function(object3, object4) {
  if (eqObjects(object3, object4) === true) {
    return console.log("The objects are identical.");
  } else {
    return console.log("The objects are not identical.");
  }
  
  // Implement me!
};

//test cases
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertObjectsEqual(ab,ba);
assertObjectsEqual(ab,abc);