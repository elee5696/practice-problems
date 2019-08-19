

function getPath(pathString){
  var resultArr = pathString.split('/');
  return resultArr;
}

function getPathParts(urlString){
  var resultObj =
  { 'protocol': 'placeholder',
    'host': 'placeholder',
    'port': 0,
    'path': 'placeholder',
    'file': 'placeholder'
  };
  var splitURL = urlString.split('/');
  var hostAndPort = splitURL[2];
  var hostPortArr = hostAndPort.split(':');
  var pathCombine = "";
  var protocolSplitter = splitURL[0];
  var protocol = protocolSplitter.split(':');

  for(var index = 3; index <= splitURL.length-2; index++){
    pathCombine = pathCombine + splitURL[index];
    if (!(index === splitURL.length-2)) {
      pathCombine = pathCombine + '/';
    }
  }

  resultObj['protocol'] = protocol[0];
  resultObj['host'] = hostPortArr[0];
  resultObj['port'] = parseInt(hostPortArr[1]);
  resultObj['file'] = splitURL[splitURL.length - 1];
  resultObj['path'] = pathCombine;

  return resultObj ;
}

function getCapitalCount(arr) {
  var count = 0;
  var capitalLetterIndex = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  for(var key of arr) {
    var currentWord = key;
    var splitWord = currentWord.split();

    if (splitWord.some(checkForCapital));
    {
      console.log(splitWord);
    }

    function checkForCapital(splitWord) {
      console.log(splitWord);
      console.log(currentWord);
      return splitWord.includes(capitalLetterIndex);
    }
  }


  return count;
}

function correctCalcChecker(){


}

function doMath(){

}
