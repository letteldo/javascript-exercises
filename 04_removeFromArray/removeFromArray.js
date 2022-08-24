const removeFromArray = function (array, ...args) {
  // for (let i = 0; i < args.length; i++) {
  //   if (array.includes(args[i])) {
  //     array.splice(array.indexOf(args[i]), 1);
  //   }
  // }
  // return array;

  const newArray = [];
  array.forEach((item) => {
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
