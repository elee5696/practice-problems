var myArray = ['mouse', 'cat', 'dog', 'human'];

function sort(arr) {

  var sortedArr = arr;
  var notSorted = true;
  var swapped = 1;
  var temp = '';

  while(notSorted) {
    if(swapped === 0) {
      notSorted = false;
    } else {
      swapped = 0;
      for (index = 0; index < arr.length-1; index++) {
        if (arr[index] > arr[index+1]) {
          temp = arr[index];
          arr[index] = arr[index+1];
          arr[index+1] = temp;
          swapped++;
        }
      }
    }
  }

  return sortedArr;

}
console.log(sort(myArray));
