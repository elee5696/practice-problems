var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];

function groupArray(arr) {
  var isString = [];
  var isNumber = [];
  var isBool = [];
  var isNull = [];
  var isUndf = [];
  var isObject = [];
  var isSymbol = [];

  var resultArr = [];

  for (index of arr) {
    if(index === null) {
      isNull.push(index);
    }
    switch (typeof index) {
      case 'string':
        isString.push(index);
        break;
      case 'number':
        isNumber.push(index);
        break;
      case 'boolean':
        isBool.push(index);
        break;
      case 'object':
        isObject.push(index);
        break;
      case 'undefined':
        isUndf.push(index);
        break;
      case 'symbol':
        isSymbol.push(index);
        break;
      default:
        console.log('unknown type: ' ,index)
    }
  }

  resultArr.push(isString, isNumber, isBool);
  return resultArr;
}

console.log(groupArray(myArray));
