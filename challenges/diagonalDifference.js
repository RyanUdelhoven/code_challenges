// Given an array of arrays, find the absolute difference between the sums of the diagonals.
// When stacked, the arrays will make a square.
// [[1, 2, 3], [4, 5, 6], [9, 8, 9]]

function diagonalDifference(input) {
  let varArr = [0, 0];
  for (i = 0; i < input.length; i++) {
    varArr[0] += input[i][i];
    varArr[1] += input[i][input.length - 1 - i];
  }
  return Math.abs(varArr[0] - varArr[1]);
}

console.log(diagonalDifference(randomArray()));

// Random Array Generator
function randomArray() {
  let output = [];
  for (i = 0; i < 3; i++) {
    let tempArr = [];
    for (j = 0; j < 3; j++) tempArr.push(Math.floor(Math.random() * 100) + 1);
    output.push(tempArr);
  }
  return output;
}
