var myArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'];

function biggerWords(string, stringArr) {
  var resultArr = [];
  for (index in stringArr) {
    if (stringArr[index].length > string.length) {
      resultArr.push(stringArr[index]);
    }
  }
  console.log(resultArr);
  return resultArr;
}

biggerWords('whales', myArray);
