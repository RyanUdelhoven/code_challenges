// Given an array, find two of the numbers whose sum is the target number.
// If the target is achievable, return the indices of both numbers.
// If the target is unachievable, return false.

const targetNumber = 9;
const numberArray = [1, 2, 4, 7, 11, 14];

const addTwo = (target, array) => {
  for (number of array) {
    const complimentIndex = array.indexOf(target - number);
    if (complimentIndex !== -1) return [array.indexOf(number), complimentIndex];
  }
  return false;
}

console.log(addTwo(targetNumber, numberArray));
