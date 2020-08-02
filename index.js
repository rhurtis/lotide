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


module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  countLetters: countLetters,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  eqArrays: eqArrays,
  countOnly: countOnly,
  eqObjects: eqObjects,
  map: map,
  takeUntil: takeUntil,
  without: without,
  letterPositions: letterPositions,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual

};