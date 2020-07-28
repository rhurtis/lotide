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

module.exports = middle;