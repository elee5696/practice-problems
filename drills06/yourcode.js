

function removeClassFromElement(elementToSelect, classToRemove){
  $(elementToSelect).removeClass(classToRemove);
}

function toggleClassOnElement(elementToSelect, classToToggle){
  $(elementToSelect).toggleClass(classToToggle);
}

function hideElements(elementToSelect, removeType){
  switch(removeType) {
    case 'hide':
      $(elementToSelect).hide();
      break;
    case 'removeChildren':
      $(elementToSelect).empty();
      break;
    case 'removeSelf':
      $(elementToSelect).remove();
      break;
    default:
      console.log(elementToSelect, removeType);
  }
}

function addAttributeToElement(elementToSelect, attToChange, changedValue){
  $(elementToSelect).attr(attToChange, changedValue);
}

function putPosInElement(elementToSelect){
  var currentPosition = $(elementToSelect).position();
  var modifiedPosition = {};
  for (key in currentPosition) {
    switch(key) {
      case 'top':
        modifiedPosition['x'] = currentPosition[key];
        break;
      case 'left':
        modifiedPosition['y'] = currentPosition[key];
        break;
        console.log(key);
    }
  }


  $(elementToSelect).html('x: ' + modifiedPosition.x + 'px<br>y: ' + modifiedPosition.y + 'px');

  return modifiedPosition;
}
