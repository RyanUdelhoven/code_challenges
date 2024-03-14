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

const example = 'example';
const random = randomString();
console.log(random);

const longestSubString = (input) => {
  input = input.split('');
  let accumulatorMap = new Map();
  let stringsMap = new Map();

  for (i in input) {
    if (accumulatorMap.has(input[i])) {
      let temp = [];
      accumulatorMap.forEach((value, key) => temp.push(key));
      accumulatorMap.clear();
      accumulatorMap.set(input[i], i);
      stringsMap.set(temp.join(), temp.length);
    } else {
      accumulatorMap.set(input[i], i);
    }
  }
  console.log(stringsMap);

  let highCount = 0;
  stringsMap.forEach((value) => (highCount < value ? (highCount = value) : null));
  for (const [key, value] of stringsMap) {
    if (value == highCount) {
      return [key, value];
    }
  }
};

console.log(longestSubString(random));
console.log(longestSubString('ajoyabgzqa'));
