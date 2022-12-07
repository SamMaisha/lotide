// countOnly function implementation; input is an array and an object. Function returns an object containing counts of everything in the array provided it is in the input object.

// allItems: an array of strings that we need to look through;
// itemsToCount: an object specifying what to count;
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;

// // TESTING

// // ASSERT EQUAL FUNCTION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// // TEST CODE
// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);