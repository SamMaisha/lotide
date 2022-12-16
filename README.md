# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sam_maisha/lotide`

**Require it:**

`const _ = require('@sam_maisha/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: takes in two arrays and console.log an appropriate message to the console.
* `assertEqual`: prints out a pass or fail message based on if actual value matches expected value
*  `assertObjectsEqual`: take in two objects and prints an appropriate pass/fail message to the console
*  `countLetters`: takes in a sentence (as a string) and then return a count of each of the letters in that sentence
*  `countOnly`: returns an object containing counts of everything in the array provided it is in the input object
*  `eqArrays`: takes in two arrays and returns true or false, based on a perfect match
*  `eqObjects`: returns true if both objects have identical keys with identical values, otherwise returns false
*  `findKey`: scans object and returns the first key for which the callback returns a truthy value
*  `findKeyByValue`: takes in an object and a value. Function scans the object and returns the first key which contains the given value. If no key with that given value is found, function returns undefined
*  `flatten`: takes in an array containing elements including nested arrays of elements, and return a "flattened" version of the array
*  `head`: returns the first item in the array
*  `letterPositions`: returns all the indices (zero-based positions) in the string where each character is found
*  `map`: takes in two arguments - an array to map, and a callback funtion - function  returns a new array based on the results of the callback function
*  `middle`: takes in an array and return the middle-most element(s) of the given array
*  `tail`: returns everything except for the first item of the provided array
*  `takeUntil`: keeps collecting items from the input array until the callback provided returns a truthy value
*  `without`: takes in a source array and itemsToRemove array, and will return a subset of a given array, removing unwanted elements

