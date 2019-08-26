var myArray = ['cat', 'caterpillar', 'whale', 'accurate', 'smile', 'cactus', 'cute'];

function fittingWords(target, inputArr) {

  var splitTarget = target.split('');
  var resultArr = [];
  var count = 0;

  for (var words of inputArr) {
    count = 0;
    for (var letters of splitTarget) {
      if (words.includes(letters)) {
        count++
      }
    }
    if (count === target.length) {
      resultArr.push(words);
    }
  }

  return resultArr;
}
