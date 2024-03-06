// Given a string, find the character that occurs most often.
// If two characters are tied for most, choose the one that occurs first.

// == INPUT RULES ==
// Is a string, is only lowercase letters, no spaces, and can be any length.

const alphaLetter = (input) => {
  let myMap = new Map();
  input
    .split('')
    .forEach((key) =>
      myMap.has(key) ? myMap.set(key, myMap.get(key) + 1) : myMap.set(key, 1)
    );
  let highCount = 0;
  myMap.forEach((value) => (highCount < value ? (highCount = value) : null));
  for (const [key, value] of myMap) {
    if (value == highCount) {
      return (result = [key, value]);
    }
  }
}

console.log(alphaLetter(randomString()));
console.log(alphaLetter('helloworld'));

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
