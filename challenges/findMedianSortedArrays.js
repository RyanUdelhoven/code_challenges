// Given two sorted arrays, return the median of the two arrays.

const random = (input) => {
  return Math.ceil(Math.random() * input);
};

const arrayMaker = () => {
  let newArray = [];
  for (i = 0; i < random(99); i++) {
    Math.round(Math.random()) ? newArray.push(i + 1) : null; // Flip a coin to push i
  }
  if (newArray.length === 0) newArray.push(random(10)); // No empty arrays
  return newArray;
};

const array1 = arrayMaker();
const array2 = arrayMaker();
console.log(array1);
console.log(array2);

const findMedianSortedArrays = (in1, in2) => {
  let c = in1.concat(in2).sort((a, b) => a - b);
  return c.length % 2 === 0 ? (c[c.length / 2] + c[c.length / 2 - 1]) / 2 : c[Math.floor(c.length / 2)];
};

console.log(findMedianSortedArrays(array1, array2));
