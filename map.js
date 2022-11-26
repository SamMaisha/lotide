
// map FUNCTION IMPLEMENTATION
const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


// TESTING

// eqArrays FUNCTION

const eqArrays = function (array1, array2) {
  let assertion = true;
  if (array1.length !== array2.length) {
    assertion = false;
    return assertion;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      assertion = false;
      return assertion;
    }
  }
  return assertion;
};

// assertArraysEqual FUNCTION

const assertArraysEqual = function (actualArray, expectedArray) {
  let arraysEqual = eqArrays(actualArray, expectedArray);
  if (arraysEqual) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actualArray} === ${expectedArray}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actualArray} !== ${expectedArray}`);
  }
};

// TEST CASES

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

const pies = ["apple", "custard", "coconut cream"];
const results2 = map(pies, pie => pie + " pie");
assertArraysEqual(results2, ["apple pie", "custard pie", "coconut cream pie"]);

const numbers = [1, 2, 3, 4, 5, 6, 7];
const results3 = map(numbers, x => x * 5);
assertArraysEqual(results3, [5, 10, 15, 20, 25, 30, 35]);







