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

// eqObjects FUNCTION

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

// assertObjectsEqual FUNCTION IMPLEMENTATION

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  let objectsEqual = eqObjects(actual, expected);
  if (objectsEqual) {
    console.log(`🟢🟢🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// TEST CODE

assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" });
assertObjectsEqual({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" });
assertObjectsEqual({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" });
assertObjectsEqual({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] });