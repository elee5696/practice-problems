function fib(num) {
  var lastNum = 1;
  var outputArr = [];
  for (index = 0; index < num; index++) {
    if (index === 0) {
      outputArr.push(0);
    } else if (index === 1) {
      outputArr.push(1);
    } else {
      outputArr.push(outputArr[index-2]+outputArr[index-1]);
    }
  }
  return outputArr;
}
