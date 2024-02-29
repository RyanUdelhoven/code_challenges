// This is standard FizzBuzz done with a couple inputs.

const randomNumber = (location) => {
  const output = Math.ceil(Math.random() * 50);
  console.log(location, output);
  return output;
};

let randomArray = () => {
  let output = [];
  const number = randomNumber('randomArray')
  for (i = 1; i < number; i++) {
    output.push(i);
  }
  return output;
};

const number = randomNumber('number');
const array = randomArray();

const fizzBuzzNumber = (input) => {
  // Because both 3 and 5 are prime `input % 15` does work.
  if (input % 15 === 0) return 'FizzBuzz';
  // The order of these two do not matter, must come after 15.
  if (input % 5 === 0) return 'Fizz';
  if (input % 3 === 0) return 'Buzz';
  // Must be last because it's condition is that it is not the ones before it.
  return input;
};

// Moving away from return requires the use of if-else.
const fizzBuzzArray = (input) => {
  let output = [];
  for (value of input) {
    if (value % 15 === 0) {
      output.push('FizzBuzz');
    } else if (value % 5 === 0) {
      output.push('Fizz');
    } else if (value % 3 === 0) {
      output.push('Buzz');
    } else {
      output.push(value);
    }
  }
  return output;
};

console.log(fizzBuzzNumber(number));
console.log(fizzBuzzArray(array));
