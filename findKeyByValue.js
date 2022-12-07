// findKeyByValue FUNCTION IMPLEMENTATION; takes in an object and a value. Function scans the object and returns the first key which contains the given value. If no key with that given value is found, function returns undefined

const findKeyByValue = function(object, value) {
  for (const key in object) {
    let valueToCompare = object[key];
    if (valueToCompare === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;


// // TESTING

// // asserEqual FUNCTION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// // TEST CODE
// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// const treats = {
//   cake: "carrot cake",
//   chocolateBar: "kit-kat",
//   pie: "apple pie",
//   candy: "sour patch kids"
// };

// assertEqual(findKeyByValue(treats, "kit-kat"), "chocolateBar");
// assertEqual(findKeyByValue(treats, "sour patch kids"), "candy");
// assertEqual(findKeyByValue(treats, "pop tarts"), undefined);





