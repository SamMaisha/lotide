//eqArrays FUNCTION

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
};

//assertArraysEqual FUNCTION

const assertArraysEqual = function (actualArray, expectedArray) {
  let arraysEqual = eqArrays(actualArray, expectedArray);
  if (arraysEqual) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actualArray} === ${expectedArray}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actualArray} !== ${expectedArray}`);
  }
};


//letterPositions FUNCTION IMPLEMENTATION
const letterPositions = function (sentence) {
  const results = {};
  let position = -1;
  for (const letters of sentence) {
    position += 1;
    if (letters !== " ") {
      if (results[letters]) {
        results[letters].push(position);
      } else {
        results[letters] = [position];
      }
    }
  }
  return results;
};

// TEST CODE
const result1 = letterPositions("hello");
console.log(result1);
assertArraysEqual(result1["h"], [0]);
assertArraysEqual(result1["e"], [1]);
assertArraysEqual(result1["l"], [2, 3]);
assertArraysEqual(result1["o"], [4]);

