const fibonacci = function (n) {
  if (n < 0) {
    return 'OOPS';
  }

  if (n <= 2) {
    return 1;
  }

  let current = 2;
  let previous = 1;
  let tmp;

  for (let i = 3; i < +n; i++) {
    tmp = previous;
    previous = current;
    current += tmp;
  }

  return current;
};

// Do not edit below this line
module.exports = fibonacci;
