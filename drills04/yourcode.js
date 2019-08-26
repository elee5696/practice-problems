

function changeElements(classToChange){
  debugger;
  switch (classToChange) {
      case 'one':
        $(classToChange).innerText = '1';
        break;
      case 'two':
        $(classToChange).innerText = '2';
        break;
      case 'three':
        $(classToChange).innerText = '3';
        break;
      case 'four':
        $(classToChange).innerText = '4';
        break;
      case 'five':
        $(classToChange).innerText = '5';
        break;
      case 'six':
        $(classToChange).innerText = '6';
        break;
      case 'seven':
        $(classToChange).innerText = '7';
        break;
      case 'eight':
        $(classToChange).innerText = '8';
        break;
      case 'nine':
        $(classToChange).innerText = '9';
        break;
      }
}

function appendTextToElement(){

}

function addClass(classToChange, classToAdd){
  var count = 0;
  $(classToChange).addClass(classToAdd);
  return count;
}

function removeElements(){

}
