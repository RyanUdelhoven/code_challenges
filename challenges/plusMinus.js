// Given an array of numbers, log the proportions of positive, negative, and zero numbers in the array.
// This one was weird because it asked for them to be logged and not returned.

const plusMinus = (arr) => {
  let varArr = [0, 0, 0];
  for (let num of arr) {
    if (num > 0) varArr[0]++;
    if (num < 0) varArr[1]++;
    if (num === 0) varArr[2]++;
  }
  console.log((varArr[0] / arr.length).toFixed(6));
  console.log((varArr[1] / arr.length).toFixed(6));
  console.log((varArr[2] / arr.length).toFixed(6));
}

plusMinus(randomArray());

// Random Array Generator
const randomArray = () => {
  let output = [];
  let arrayLength = Math.floor(Math.random() * 100) + 10;
  for (i = 0; i < arrayLength; i++)
    output.push(Math.floor(Math.random() * 100) - 50);
  return output;
}
