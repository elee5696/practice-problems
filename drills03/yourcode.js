

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
  for(var key of arr) {
    if(key[0].toUpperCase() === key[0]) {
      count++;
    }
  }
    return count;
}

function correctCalcChecker(equations) {
  var results = [];
  for (var key in equations) {
    if (equations[key].result === doMath(equations[key])) {
      results.push(equations[key]);
    }
  }
  return results;
}

function doMath(equationObj){
  if (equationObj.op === '+') {
    return equationObj.num1 + equationObj.num2;
  }
  else if (equationObj.op === '-') {
    return equationObj.num1 - equationObj.num2;
  }
  else if (equationObj.op === '*') {
    return equationObj.num1 * equationObj.num2;
  }
  else if (equationObj.op === '/') {
    return equationObj.num1 / equationObj.num2;
  }
}
