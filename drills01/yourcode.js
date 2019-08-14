
function sumArray(numbers){
  var number;
  var sum = null;
  for(number of numbers) {
    sum += number;
  }
  return sum;
}

function fitWithinVal(numbers, target){
  var number;
  var sum = 0;
  var newArr = [];
  for(number of numbers) {
    if(number + sum >= target) {
      continue;
    } else {
      sum += number;
      newArr.push(number);
    }
  }
  return newArr;
}

function getAllNamesShorterThan(names, target){
  var name;
  var newArr = [];
  for(name of names) {
    if(name.length < target) {
      newArr.push(name);
    }
  }
  return newArr;
}

function makeLabel(person){
  var newLabel = person.greeting + " " + person.givenName + " " + person.familyName + "\n" + person["home address"].streetNumber + " " + person["home address"].streetName + "\n" + person["home address"].city + ", " + person["home address"].state + " " + person["home address"].zip;
  return newLabel;
}
