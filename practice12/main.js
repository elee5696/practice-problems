function math_sequence(num) {
  var resultArr = [];

  for(index = num*2; index < num+38; index+=2) {
    if (index < num * 10) {
      resultArr.push(index);
    } else {
      resultArr.push(index / 4);
    }
  }

  console.log(resultArr);
}
