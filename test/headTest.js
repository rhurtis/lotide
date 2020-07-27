const head = require('../head');
const assertEqual = require('../assertEqual');

//test
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
console.log(head([]));
console.log(head([1]));