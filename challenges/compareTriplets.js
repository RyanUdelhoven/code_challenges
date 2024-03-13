// Given two arrays of integers, compare each position.
// If array a[i] > array b[i], add 1 to output[0].
// If array a[i] < array b[i], add 1 to output[1].

const compareTriplets = (a, b) => {
  let output = [0, 0];
  for (i = 0; i < a.length; i++) {
    if (a[i] > b[i]) output[0]++;
    if (a[i] < b[i]) output[1]++;
  }
  return output;
}

const [a, b] = randomArrayGenerator();
console.log(compareTriplets(a, b));

// Random Array Generator
const randomArrayGenerator = () => {
  let output = [[], []];
  for (i = 0; i < 3; i++) {
    output[0].push(Math.floor(Math.random() * 10) + 1);
    output[1].push(Math.floor(Math.random() * 10) + 1);
  }
  return output;
}
