// Given a 32-bit signed integer, reverse digits of an integer.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
// If the reversed integer overflows, return 0.

const reverseInteger = (input) => {
  let output = parseInt(input.toString().split('').reverse().join(''));
  if (output > 2 ** 31 - 1 || output < -(2 ** 31)) return 0;
  return output;
}

console.log(reverseInteger(123));