var myArray = ['hello', 45, 'Bob', 'what', '23'];

function arrayReverse(arr) {
  var resultArr = [];
  for(index = arr.length - 1; index >= 0; index--) {
    resultArr.push(arr[index]);
  }
  console.log(resultArr);
  return resultArr;
}

arrayReverse(myArray);
