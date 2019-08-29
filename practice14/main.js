function arrayFactors(arr) {

  var returnObj = {};

  for (number of arr) {
    returnObj[number] = [];
  }

  for (number of arr) {
    for (comparingNumber of arr) {
      if ((number / comparingNumber) % 1 === 0 && number !== comparingNumber) {
        returnObj[number].push(comparingNumber);
      }
    }
  }

  console.log(returnObj);
}

arrayFactors([4, 2, 8, 6, 3, 9]);
