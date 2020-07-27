
const tail = function(array1) {
  if (array1.length === 1) {
    return [];
  } else {
    return array1.slice(1);
  }
  
};

module.exports = tail;
