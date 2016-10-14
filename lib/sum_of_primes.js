// The derivative of a function y = f(x) is denoted as df(x)/d(x). For functions ax^n, the derivate is nax^(n-1). Write a function that calculates the coefficient and power of the derivate of a function ax^n where a and n are given.
'use strict'

module.exports = {
  sumOfPrimes: function(a) {
    if(typeof a != "number"){
      return "Invalid Input";
    }
    if (a < 0) {
      return "Negative Number not allowed";
    }
    var result = 0;
    for (var i = 1; i <= a; i++) {
      var isPrime = true;

      for (var j = 2; j <= i/2; j++) {
        if (i % j == 0) {
          isPrime = false;
          break;
        };
      };

      if (isPrime == true && i != 1) {
        result = result + i;
      }
      
      isPrime = false;

    };

    return result;

  }
  
}