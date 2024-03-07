// Given an array of numbers, move all zeros to the end without changing the order of the other numbers and without making a copy of the array.

const array1 = [0, 1, 0, 2, 3, 4, 0, 5, 6, 7, 0, 0, 0, 8, 9, 10];

const moveZeros = (input) => {
  let left = 0;
  let right = 0;

  while (right < input.length) {
    if (input[right] !== 0) {
      // Flips the two targeted values.
      [input[left], input[right]] = [input[right], input[left]];
      left++;
    }
    right++;
  }
  return input;
}

console.log(moveZeros(array1));

// Move all zeros forward?

const array2 = [1, 0, 2, 3, 4, 0, 5, 6, 7, 0, 0, 0, 8, 9, 10, 0];

const moveZerosReversed = (input) => {
  let left = input.length - 1;
  let right = input.length - 1;

  while (right > 0) {
    if (input[right] !== 0) {
      [input[right], input[left]] = [input[left], input[right]];
      left--;
    }
    right--;
  }
  return input;
}

console.log(moveZerosReversed(array2));
