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

// without FUNCTION IMPLEMENTATION

/*

// initial implementation

const without = function (source, itemsToRemove) {
  let newArray = [];
  let elementExistsInItemsToRemove = false;
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        elementExistsInItemsToRemove = true;
      }
    }
    if (elementExistsInItemsToRemove === false) {
      newArray.push(source[i]);
    }
  }
  return newArray;
}

*/


// without function REFACTOR 
const without = function (source, itemsToRemove) {
  let newArray = [];
  let elementExistsInItemsToRemove = false;
  for (let i = 0; i < source.length; i++) {
    elementExistsInItemsToRemove = itemsToRemove.includes(source[i]);
    if (elementExistsInItemsToRemove === false) {
      newArray.push(source[i]);
    }
  }
  return newArray;
}



// CODE TEST

assertArraysEqual(without([1, 2, 3], [3]), [1, 2]);
assertArraysEqual(without([7, 8, 12, 6, 8, 4], [4, 8, 7]), [12, 6]);
assertArraysEqual(without([1, 2, 3, 4, 5, 6, 7], [3, 4, 5, 6, 7]), [1, 2]);
assertArraysEqual(without([1, 2], [3]), [1, 2]);




