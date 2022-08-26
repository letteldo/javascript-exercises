const palindromes = function (string) {
  const reversedString = string
    .toLowerCase()
    .split('')
    .map((char) => {
      if (char === ',' || char === '.' || char === '!') {
        return '';
      }
      return char;
    })
    .filter((char) => char !== ' ')
    .reverse()
    .join('');

  string = string
    .toLowerCase()
    .split('')
    .map((char) => {
      if (char === ',' || char === '.' || char === '!') {
        return '';
      }
      return char;
    })
    .filter((char) => char !== ' ')
    .join('');

  return string === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
