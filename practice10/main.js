function permutations(inputString) {
  debugger;
  var splitArr = inputString.split('');
  var resultArr = [];
  var stringToBePushed = '';

  for (var startingIndex = 0; startingIndex < splitArr.length; startingIndex++) {
    stringToBePushed = stringToBePushed.concat(splitArr[startingIndex]);
    for (var permIndex = 0; permIndex < splitArr.length; permIndex++ ) {
      if (startingIndex !== permIndex) {
        stringToBePushed = stringToBePushed.concat(splitArr[permIndex]);
      }
    }
    resultArr.push(stringToBePushed);
    stringToBePushed = splitArr[startingIndex];
    for (var permIndex2 = splitArr.length-1; permIndex2 >= 0; permIndex2--) {
      if (startingIndex !== permIndex2) {
        stringToBePushed = stringToBePushed.concat(splitArr[permIndex2]);
      }
    }
    resultArr.push(stringToBePushed);
    stringToBePushed = '';
  }

  console.log(resultArr);
}

permutations('abc');
