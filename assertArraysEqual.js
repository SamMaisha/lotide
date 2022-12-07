const eqArrays = require('./eqArrays');

// assertArraysEqual FUNCTION IMPLEMENTATION; takes in two arrays and console.log an appropriate message to the console.

const assertArraysEqual = function(actualArray, expectedArray) {
  let arraysEqual = eqArrays(actualArray, expectedArray);
  if (arraysEqual) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actualArray} === ${expectedArray}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actualArray} !== ${expectedArray}`);
  }
};

module.exports = assertArraysEqual;
