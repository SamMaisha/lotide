// findKey FUNCTION IMPLEMENTATION; scans object and returns the first key for which the callback returns a truthy value

const findKey = function(object, callback) {
  let result = "";
  for (let key in object) {
    if (callback(object[key])) {
      result = key;
      return result;
    }
  }
};

module.exports = findKey;

// // TESTING

// // assertEqual FUNCTION
// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// // TEST

// const result1 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri": { stars: 3 },
//   "noma": { stars: 2 },
//   "elBulli": { stars: 3 },
//   "Ora": { stars: 2 },
//   "Akelarre": { stars: 3 }
// }, x => x.stars === 2);

// assertEqual(result1, "noma");

// const result2 = findKey({
//   Sam: 2,
//   Cody: 3,
//   Billy: 5,
//   Jake: 87
// }, x => x === 5);

// assertEqual(result2, "Billy");



