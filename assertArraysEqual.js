const eqArrays = require('./eqArray');

// assertArraysEqual FUNCTION IMPLEMENTATION

const assertArraysEqual = function(actualArray, expectedArray) {
  let arraysEqual = eqArrays(actualArray, expectedArray);
  if (arraysEqual) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actualArray} === ${expectedArray}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actualArray} !== ${expectedArray}`);
  }
};

module.exports = assertArraysEqual;
