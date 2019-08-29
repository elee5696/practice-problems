function character_convert(string) {
  var resultString = '';
  for (index in string) {
    resultString += string.charCodeAt(index);
  }
  return resultString;
}
