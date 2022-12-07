// middle FUNCTION IMPLEMENTATIOM

const middle = function(array) {
  let newArray = [];
  if (array.length <= 2) {
    return newArray;
  }
  let middleArrayElement;
  let middle = (array.length / 2);
  if (array.length % 2 !== 0) {
    middleArrayElement = Math.ceil(middle) - 1;
    newArray.push(array[middleArrayElement])
    return newArray;
  }
  if (array.length % 2 === 0) {
    middleArrayElement = middle - 1;
    newArray.push(array[middleArrayElement], array[middleArrayElement + 1]);
    return newArray;
  }
};

module.exports = middle;




