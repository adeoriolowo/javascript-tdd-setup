'use strict'

var chai = require('chai');
var assert = chai.assert;

//Reference the code to be tested
var lib = require('./lib/sum_of_primes.js');

//Begining of the the Test Suit
describe("Test If sum_of_primes is correct", function() {
  it("should give Invalid input if Negative number is inputed", function() {
    assert(lib.sumOfPrimes(-1) == 'Negative Number not allowed'
    );
  });
  it("should give 0 if 1 is inputed", function() {
    assert(lib.sumOfPrimes(1) == 0     //Checking for Negative input
    );
  });
  it("should give Invalid input if type other number is inputed", function() {
    assert(lib.sumOfPrimes('a') == "Invalid Input"   //Checking for String input
    );
  });
  it("should give Invalid input if type other number is inputed", function() {
    assert(lib.sumOfPrimes([3]) == "Invalid Input"   //Checking for Array input
    );
  });
  it("should give 2 if 2 is inputed", function() {
    assert(lib.sumOfPrimes(2) == 2   //Validate correct output 
    );
  });
  it("should give 17 if 10 is inputed", function() {
    assert(lib.sumOfPrimes(10) == 17
    );
  });
  it("should give 100 if 25 is inputed", function() {
    assert(lib.sumOfPrimes(25) == 100
    );
  });
  it("should give 197 if 40 is inputed", function() {
    assert(lib.sumOfPrimes(40) == 197
    );
  });
  it("should give 281 if 44 is inputed", function() {
    assert(lib.sumOfPrimes(44) == 281
    );
  });
  it("should give 281 if 45 is inputed", function() {
    assert(lib.sumOfPrimes(45) == 281
    );
  });
  it("should give 437 if 60 is inputed", function() {
    assert(lib.sumOfPrimes(60) == 440
    );
  });
  
});