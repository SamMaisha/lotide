// without FUNCTION IMPLEMENTATION; without takes in a source array and itemsToRemove array, and will return a subset of a given array, removing unwanted elements.

const without = function(source, itemsToRemove) {
  let newArray = [];
  let isElementInItemsToRemove = false;
  for (let i = 0; i < source.length; i++) {
    isElementInItemsToRemove = itemsToRemove.includes(source[i]);
    if (isElementInItemsToRemove === false) {
      newArray.push(source[i]);
    }
  }
  return newArray;
};

module.exports = without;


// // TESTING

// // eqArrays FUNCTION

// const eqArrays = function(array1, array2) {
//   let assertion = true;
//   if (array1.length !== array2.length) {
//     return assertion = false;
//   }
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       assertion = false;
//     }
//   }
//   return assertion;
// }

// // assertArraysEqual FUNCTION

// const assertArraysEqual = function(actualArray, expectedArray) {
//   let arraysEqual = eqArrays(actualArray, expectedArray);
//   if (arraysEqual) {
//     console.log(`🟢🟢🟢 Assertion Passed: ${actualArray} === ${expectedArray}`);
//   } else {
//     console.log(`🔴🔴🔴 Assertion Failed: ${actualArray} !== ${expectedArray}`);
//   }
// };

// // CODE TEST

// assertArraysEqual(without([1, 2, 3], [3]), [1, 2]);
// assertArraysEqual(without([7, 8, 12, 6, 8, 4], [4, 8, 7]), [12, 6]);
// assertArraysEqual(without([1, 2, 3, 4, 5, 6, 7], [3, 4, 5, 6, 7]), [1, 2]);
// assertArraysEqual(without([1, 2], [3]), [1, 2]);




