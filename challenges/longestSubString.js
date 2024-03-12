// Given a string, find the longest string of characters that has no repeating characters.
// Return both the substring and the number of characters in an array.

// Random String Generator
const randomString = () => {
  let result = '';
  let characters = 'abcdefghijklmnopqrstuvwxyz';
  let stringLength = Math.floor(Math.random() * 100) + 10;
  for (let i = 0; i < stringLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const example = 'example'
const random = randomString();

const longestSubString = (input) => {
  
}
