const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');


// TEST CODE 
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([5, 3, 5, 2, 1, 8, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 6, 7, 8]), [3, 6]);
assertArraysEqual(middle([1, 2]), []);