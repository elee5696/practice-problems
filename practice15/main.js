function numeric_toggles(num) {
  debugger;
  var resultArr = [];

  // num + 0 * 2
  // num + 0 * 3

  // num + 1 * -3
  // num + 1 * -4

  // num + 2 * 4
  // num + 2 * 5

  // num + 3 * -5
  // num + 3 * -6

  // etc etc etc

  var isNegative = 1;
  var change = 0;
  for (index = 2; index < 6; index++) {
    resultArr.push( isNegative * (num + change) * index);
    resultArr.push( isNegative * (num + change) * (index + 1));
    change++;
    isNegative *= -1;
  }

  console.log(resultArr);
}

numeric_toggles(2);

//[4, 6, -9, -12, 16, 20, -25, -30];
