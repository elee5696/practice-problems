function evenodd(arr) {
  var odds = [];
  var evens = [];

  for (number in arr) {
    if (!isNaN(number)) {
      if (number % 2 === 0 && evens.includes(number)) {
        evens.push(number);
      } else if (number % 2 !== 0 && odds.includes(number)) {
        odds.push(number);
      }
    }
  }

  return odds, evens;
}
