const numbers = [
  {
    number: 3,
    isEven: false,
    isOdd: false,
  },
  {
    number: 4,
    isEven: false,
    isOdd: false,
  },
  {
    number: 7,
    isEven: false,
    isOdd: false,
  },
];

function checkNumbers(arrOfNums) {
  return arrOfNums.map((n) => {
    if (n.number % 2 === 0) {
      n.isEven = true;
      n.isOdd = false;
    } else {
      n.isEven = false;
      n.isOdd = true;
    }

    return n;
  });
}

module.exports = { numbers, checkNumbers };
