// Add the reverse of the digits in the array.
// ['2', '3', '4'] = 432
// ['6', '5', '4'] = 456
// 432 + 456 = 888

let randomInteger = () => {
  return Math.floor(Math.random() * 10);
};

let randomArray = () => {
  let length = Math.floor(Math.random() * 10) + 1;
  let output = [];
  for (i = 0; i < length; i++) {
    output.push(randomInteger());
  }
  console.log(output);
  return output;
};

randomArray();