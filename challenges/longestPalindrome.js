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

const longestPalindrome = (input) => {

}

const isItAPalindrome = (input) => {
  let reversed = input.split('').reverse().join('');
  return input === reversed;
}