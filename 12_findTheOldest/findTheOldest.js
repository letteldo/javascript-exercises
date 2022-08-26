const findTheOldest = function (people) {
  return people.sort((a, b) => {
    let aAge;
    let bAge;

    if (a.yearOfDeath === undefined) {
      aAge = new Date().getFullYear() - a.yearOfBirth;
    } else {
      aAge = a.yearOfDeath - a.yearOfBirth;
    }

    if (b.yearOfDeath === undefined) {
      bAge = new Date().getFullYear() - b.yearOfBirth;
    } else {
      bAge = b.yearOfDeath - a.yearOfBirth;
    }

    return bAge - aAge;
  })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
