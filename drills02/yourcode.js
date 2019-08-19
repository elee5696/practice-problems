

function countOccurences(arr, target){
  var count = 0;
  for(var key of arr) {
    if(key === target) {
      count++
    }
  }
  return count;
}

function wordLengths(arr){
  var count = 0;
  var countArr = [];
  for(var key of arr) {
    count = key.length;
    countArr.push(count);
  }
  return countArr;
}

function getMinMaxMean(arr){
  var solution = {'min': 0 ,
                  'max': 0 ,
                  'mean': 0};
  var minTemp = arr[0];
  var maxTemp = arr[0];
  var meanTemp = 0;
  for(var minKey of arr) {
    if (minKey < minTemp) {
      minTemp = minKey;
    }
  }
  for (var maxKey of arr) {
    if (maxKey > maxTemp) {
      maxTemp = maxKey;
    }
  }
  for (var meanKey of arr) {
    meanTemp += meanKey;
  }
  meanTemp /= arr.length;
  solution = {
    'min': minTemp,
    'max': maxTemp,
    'mean': meanTemp
  };
  return solution;
}

function findMode(arr){
  var modeCount = 0;
  var currentCount = 0;
  var modeValue = 0;
  var currentValue = 0;
  var sorted = arr.sort();

  for (var index = 0; index < sorted.length; index++) {
    if (sorted[index] != currentValue) {
      if (currentCount > modeCount) {
        modeValue = currentValue;
      }
      currentValue = sorted[index];
      modeCount = currentCount;
      currentCount = 1;
    } else {
      currentCount++;
    }
  }

  if(currentCount > modeCount) {
    modeValue = currentValue;
  }

  return modeValue
}
