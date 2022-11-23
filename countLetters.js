// ASSERT EQUAL FUNCTION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// countLetters FUNCTION IMPLEMENTATION

// countSentence; a string from which we will count of each letter in the string

const countLetters = function (countSentence) {
  let countLettersInSentence = {};
  for (const letters of countSentence) {
    if (letters !== " ") {
      if (countLettersInSentence[letters]) {
        countLettersInSentence[letters] += 1;
      } else {
        countLettersInSentence[letters] = 1;
      }
    }
  }
  return countLettersInSentence;
};

// TEST CODE

const result1 = countLetters('a bb ccc dddd eeeee ffffff');
assertEqual(result1["a"], 1);
assertEqual(result1["b"], 2);
assertEqual(result1["c"], 3);
assertEqual(result1["d"], 4);
assertEqual(result1["e"], 5);
assertEqual(result1["f"], 6);






