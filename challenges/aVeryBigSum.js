// This was the same answer as arraySum.js, but I made a new file just to keep track of all the problems I've done.

function aVeryBigSum(input) {
  return input.reduce((a, b) => a + b);
}

console.log(simpleArraySum(randomArray()));

// Random Array Generator
function randomArray() {
  let output = [];
  let arrayLength = Math.floor(Math.random() * 100) + 10;
  for (i = 0; i < arrayLength; i++)
    output.push(Math.floor(Math.random() * 100) + 100000000);
  return output;
}
