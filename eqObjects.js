// assertEqual FUNCTION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// eqArrays FUNCTION
const eqArrays = function (array1, array2) {
  let assertion = true;
  if (array1.length !== array2.length) {
    assertion = false;
    return assertion;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      assertion = false;
      return assertion;
    }
  }
  return assertion;
};

// eqObjects FUNCTION IMPLEMENTATION

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false; // check to verify if objects have same number of keys
  }
  for (const key1 in object1) {
    if (Array.isArray(object1[key1])) {
      return eqArrays(object1[key1], object2[key1]);
    }
    if (object1[key1] !== object2[key1]) {
      return false;
    }
  }
  return true;
};

// TEST CODE

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba));
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc));
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

