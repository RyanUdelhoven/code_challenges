// Return the sum of all elements in an array.
function simpleArraySum(input) {
  return input.reduce((a, b) => a + b);
}

console.log(simpleArraySum(randomArray()));

// Random Array Generator
function randomArray() {
  let output = [];
  let arrayLength = Math.floor(Math.random() * 100) + 10;
  for (i = 0; i < arrayLength; i++)
    output.push(Math.floor(Math.random() * 100) + 1);
  return output;
}

// Also works on string arrays.
const inputText = ['Hello', ' ', 'World'];
console.log(simpleArraySum(inputText));
