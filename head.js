// ASSERT EQUAL FUNCTION TO POST PASS OR FAIL MESSAGE
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// HEAD FUNCTION IMPLEMENTATION
const head = function (array) {
  return array[0];
};

// TEST CODE 
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 5);
