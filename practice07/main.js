function toPigLatin(inputString) {
  var splitArr = inputString.split(" ").toLowerCase();
  var resultString = '';

  for (keys of splitArr) {
    flippedWord = keys
    firstLetter = flippedWord.slice(0, 1);
    flippedWord = flippedWord.slice(1, flippedWord.length).concat(firstLetter);
    flippedWord += 'ay ';
    resultString += flippedWord;
  }

  return resultString;
}
