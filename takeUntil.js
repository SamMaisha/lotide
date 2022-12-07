// takeUntil FUNCTION IMPLEMENTATION; will keep collecting items from the input array until the callback provided returns a truthy value
// callback will be provided as an item in the array

const takeUntil = function(array, callback) {
  let newArray = [];
  for (let item of array) {
    if (callback(item)) {
      return newArray;
    } else {
      newArray.push(item);
    }
  }
};

module.exports = takeUntil;

// // TESTING

// // eqArrays FUNCTION

// const eqArrays = function(array1, array2) {
//   let assertion = true;
//   if (array1.length !== array2.length) {
//     assertion = false;
//     return assertion;
//   }
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       assertion = false;
//       return assertion;
//     }
//   }
//   return assertion;
// };

// // assertArraysEqual FUNCTION

// const assertArraysEqual = function(actualArray, expectedArray) {
//   let arraysEqual = eqArrays(actualArray, expectedArray);
//   if (arraysEqual) {
//     console.log(`🟢🟢🟢 Assertion Passed: ${actualArray} === ${expectedArray}`);
//   } else {
//     console.log(`🔴🔴🔴 Assertion Failed: ${actualArray} !== ${expectedArray}`);
//   }
// };

// // TEST CASES

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// assertArraysEqual(results1, [1, 2, 5, 7, 2]);

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);

// const data3 = ["apple", "orange", "melon", "honda", "mercedes", "tesla"];
// const result3 = takeUntil(data3, x => x === 'honda');
// assertArraysEqual(result3, ["apple", "orange", "melon"]);


