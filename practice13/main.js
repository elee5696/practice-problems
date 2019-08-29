function math_sequences(num1, num2) {
  var resultArr = [];

  var sum = num1 + num2;
  resultArr.push(num1 + '+' + num2 '=' + sum);

  var diff = num1 - num2
  resultArr.push(num1 + '-' + num2 '=' + diff);

  var pro = num1 * num2
  resultArr.push(num1 + '*' + num2 '=' + pro);

  var quo = num1 / num2
  resultArr.push(num1 + '/' + num2 '=' + quo);

  return resultArr;
}
