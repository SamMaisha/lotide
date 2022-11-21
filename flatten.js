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

// assertArraysEqual FUNCTION 

const assertArraysEqual = function (actualArray, expectedArray) {
  let arraysEqual = eqArrays(actualArray, expectedArray);
  if (arraysEqual) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actualArray} === ${expectedArray}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actualArray} !== ${expectedArray}`);
  }
};

// flatten FUNCTION IMPLEMENTATION

const flatten = function (array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (const element of array[i])
        newArray.push(element);
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// TEST CODE
assertArraysEqual(flatten([[1, 2, 3], 4, 5, [6, 7], [8]]), [1, 2, 3, 4, 5, 6, 7, 8]);


