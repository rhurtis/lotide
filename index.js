// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const countLetters = require('./countLetters');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const eqArrays = require('./eqArray.js');
const countOnly = require('./countOnly.js');
const eqObjects = require('./eqObjects.js');
const map = require('./map.js');
const takeUntil = require('./takeUntil.js');
const without = require('./without.js');
const letterPositions = require('./letterPositions.js');
const assertArraysEqual = require('./assertArraysEqual.js');
const assertEqual = require('./assertEqual.js');
const assertObjectsEqual = require('./assertObjectsEqual.js');


const indexObj = {
  head,
  tail,
  middle,
  countLetters,
  findKey,
  findKeyByValue,
  eqArrays,
  countOnly,
  eqObjects,
  map,
  takeUntil,
  without,
  letterPositions,
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual
};


module.exports = indexObj;
