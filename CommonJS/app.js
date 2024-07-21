const { numbers, checkNumbers } = require('./numbers.js');

let myNumbers = numbers;

myNumbers = checkNumbers(myNumbers);

for (const n of myNumbers) {
  console.log(n);
}
