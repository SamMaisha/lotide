// FUNCTION IMPLEMENTATION

const eqArrays = function(array1, array2) {
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
}

module.exports = eqArrays;

