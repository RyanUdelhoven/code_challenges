// Add the reverse of the digits in the two arrays.
// ['2', '3', '4'] = 432
// ['6', '5', '4'] = 456
// 432 + 456 = 888

const randomInteger = () => {
  return Math.floor(Math.random() * 10);
};

const randomArray = () => {
  let length = Math.floor(Math.random() * 10) + 1;
  let output = [];
  for (i = 0; i < length; i++) {
    output.push(randomInteger().toString());
  }
  console.log(output);
  return output;
};

const addTwoNumbers = (l1, l2) => {
  return parseInt(l1.reverse().join('')) + parseInt(l2.reverse().join(''));
};

console.log('Example:', addTwoNumbers(['2', '3', '4'], ['6', '5', '4']));
console.log(addTwoNumbers(randomArray(), randomArray()));
