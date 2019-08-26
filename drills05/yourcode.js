

function populateRecords(input){

  var resultObj = {
    'charge': 0,
    'cash advance': 0,
  }

  var newLine = ('<div class="transactionRecord"></div>');
  var newType = ('<div class="transactionType"></div>');
  var newSource = ('<div class="transactionLocation"></div>');
  var newAmt = ('<div class="transactionAmount"></div>');

  $('#testArea').append('<div class=".transactionRecord"></div>');
  $('#' + tablesMade).append(newType);
  $('#' + tablesMade).append(newSource);
  $('#' + tablesMade).append(newAmt);

  for ( index in input ) {
    if( input[index].type === 'charge' ) {



      resultObj['charge'] += parseFloat(input[index].amount);

    } else if ( input[index].type === 'cash advance' ) {

      resultObj['cash advance'] += parseFloat(input[index].amount);

    }
  }

  tablesMade++;

  console.trace();
  return resultObj;
}
