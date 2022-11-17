// eqArrays FUNCTION

const eqArrays = function (array1, array2) {
  let assertion = true;
  if (array1.length !== array2.length) {
    return assertion = false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      assertion = false;
    }
  }
  return assertion;
}

// assertArraysEqual FUNCTION IMPLEMENTATION

const assertArraysEqual = function (actualArray, expectedArray) {
  let arraysEqual = eqArrays(actualArray, expectedArray);
  if (arraysEqual) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actualArray} === ${expectedArray}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actualArray} !== ${expectedArray}`);
  }
};

// TEST CODE 

assertArraysEqual([1, 2, 3, 4], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
