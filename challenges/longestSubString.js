// Given a string, find the longest string of characters that has no repeating characters.
// Return both the substring and the number of characters in an array.

// Random String Generator
const randomString = () => {
  let result = '';
  let characters = 'abcdefghijklmnopqrstuvwxyz';
  let stringLength = Math.ceil(Math.random() * 10) + 26; // +26 w/ .ceil guarantees a duplicate.
  for (let i = 0; i < stringLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const random = randomString();
console.log(random);

const longestSubString = (input) => {
  input = input.split('');
  let accumulatorArray = [];
  let stringsMap = new Map();

  for (i in input) {
    if (accumulatorArray.includes(input[i])) {
      stringsMap.set(accumulatorArray, accumulatorArray.length);
      accumulatorArray = [];
    }
    accumulatorArray.push(input[i]);
  }
  stringsMap.set(accumulatorArray, accumulatorArray.length); // Catches final letter series

  let highCount = 0;
  stringsMap.forEach((value) => (highCount < value ? (highCount = value) : null));
  for (const [key, value] of stringsMap) {
    if (value == highCount) {
      return [key, value];
    }
  }
};

console.log(longestSubString(random));
