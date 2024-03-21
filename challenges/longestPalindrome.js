// Given a string, return the longest palindrome.

// Random String Generator
const randomString = () => {
  let result = '';
  let characters = 'abcdefghijklmnopqrstuvwxyz';
  let stringLength = Math.ceil(Math.random() * 10) + 26;
  for (let i = 0; i < stringLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const random = randomString();
console.log(random);

const isItAPalindrome = (input) => {
  let reversed = input.split('').reverse().join('');
  return input === reversed;
}
const longestPalindrome = (input) => {
  let output = '';
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j <= input.length; j++) {
      let substring = input.slice(i, j);
      if (isItAPalindrome(substring) && substring.length > output.length) {
        output = substring;
      }
    }
  }
  return output;
}

console.log(longestPalindrome(random));
