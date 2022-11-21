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

// middle FUNCTION IMPLEMENTATIOM

const middle = function (array) {
  let newArray = [];
  let middleArrayElement;
  if (array.length <= 2) {
    return newArray;
  }
  if (array.length % 2 !== 0) {
    middleArrayElement = Math.ceil(array.length / 2) - 1;
    newArray.push(array[middleArrayElement])
    return newArray;
  }
  if (array.length % 2 === 0) {
    middleArrayElement = (array.length) / 2 - 1;
    newArray.push(array[middleArrayElement], array[middleArrayElement + 1]);
    return newArray;
  }
};

// TEST CODE 
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([5, 3, 5, 2, 1, 8, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 6, 7, 8]), [3, 6]);
assertArraysEqual(middle([1, 2]), []);


