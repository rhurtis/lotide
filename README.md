# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rhurtis/lotide`

**Require it:**

`const _ = require('@rhurtis/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: Takes an array input. Returns a single element array with the first element of the input array.
* `tail(...)`: Takes an input array. Returns an array with the same elements except for the first element.
* `middle(...)`: Will take in an array and return the middle-most element(s) of the given array.
* `countLetters(...)`: Will take in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `findKey(...)`: the function findKey will take in an object and a callback. It will scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it will return undefined.
* `findKeyByValue(...)`: Will take in an object and a callback. It will scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it will return undefined.
* `eqArrays(...)`: Takes in two arrays and returns true or false, based on a perfect match.
* `countOnly(...)`: Given an array and an object. It will return an object containing counts of everything that the input object listed.
* `eqObjects(...)`:  Takes in two objects and returns true or false, based on a perfect match.
* `map(...)`: A homemade method that creates a new array populated with the results of calling a provided function on every element in the calling array.
* `takeUntil(...)`: Will keep collecting items from a provided array until the callback provided returns a truthy value.
* `without(...)`: Will return a subset of a given array, removing unwanted elements.
* `letterPositions(...)`:  Will return all the indices (zero-based positions) in the string where each character is found.
* `assertArraysEqual(...)`: Tells whether or not two arrays are equal.
* `assertEqual(...)`: States whether or not two non array inputs are equal.
* `assertObjectsEqual(...)`: States whether or not two objects are equal.
