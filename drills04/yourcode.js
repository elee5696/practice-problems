

function changeElements(classToChange){
  $(classToChange).each(function(index) {
    switch ($(this).text()) {
      case 'one':
        $(this).text('1');
        break;
      case 'two':
        $(this).text('2');
        break;
      case 'three':
        $(this).text('3');
        break;
      case 'four':
        $(this).text('4');
        break;
      case 'five':
        $(this).text('5');
        break;
      case 'six':
        $(this).text('6');
        break;
      case 'seven':
        $(this).text('7');
        break;
      case 'eight':
        $(this).text('8');
        break;
      case 'nine':
        $(this).text('9');
        break;
      }
    });
}

function appendTextToElement(element, change){
  $(element).each(function(index) {
    $(this).text($(this).text().concat(change));
  });
}

function addClass(classToChange, classToAdd){
  var count = 0;
  $(classToChange).each(function(index) {
    $(this).addClass(classToAdd);
    count++;
  });
  return count;
}

function removeElements(toRemove){
  $(toRemove).each(function(index) {
    $(this).remove();
  });
}
