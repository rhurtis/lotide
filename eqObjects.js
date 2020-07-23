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
    console.log('the objects are the same length');
    for (let i in object1) {
      if (Array.isArray(object1[i]) === true) {
        console.log('this is an array:',i);
        if (eqArrays(object1[i],object2[i]) === true) {
          console.log('the arrays are equal:',i);
          passCounter++;
            
            
        } else {
          console.log('the arrays are not equal:',i);
          falseCounter++;
            
        }
      } else {
        if (object1[i] === object2[i])
           
          console.log('the object key/value is not an array but they are equal:',i);
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

//testing with assertEqual
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
const z = {a:[1,2]};
const y = {a:[1]};
assertEqual(eqObjects(ab,ba),true);
assertEqual(eqObjects(ab,abc),false);
assertEqual(eqObjects(cd, dc),true);
assertEqual(eqObjects(cd, cd2),false);
assertEqual(eqObjects(z,y),false);