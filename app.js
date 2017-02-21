var someNumber = 1;
var anotherNumber = 2;
var sum = someNumber + anotherNumber;
console.log(sum);

// Multiplication Demo - DIFFERENT FROM FINAL CALCULATOR
function multiplyingDemo(firstNumber, secondNumber) {
  var product = firstNumber * secondNumber;
  return product;
}

console.log(multiplyingDemo(someNumber, anotherNumber));


// Modules
// require navigate to the file
// finds out what module.exports equals and returns that
var someNumber = require('./modules/utils/some-number.js');
var someString = require('./modules/utils/some-string.js');
var someObject = require('./modules/utils/some-object.js');
var someFunction = require('./modules/utils/some-function.js');
var name = "Chad";
var twoFunctions = require('./modules/utils/two-functions.js');

console.log('someNumber', someNumber);
console.log('someString', someString);
console.log('someObject', someObject); // {name: , age: }
console.log('someFunction(name)', someFunction(name));
console.log('twoFunctions', twoFunctions);
console.log('twoFunctions.functionOne()', twoFunctions.functionOne());
console.log('twoFunctions.functionTwo()', twoFunctions.functionTwo());


var calulator = require('./modules/calculator.js');
var numberOne = 8;
var numberTwo = 4;

console.log(calulator.multiply(numberOne, numberTwo)); // This should log 32
console.log(calulator.divide(numberOne, numberTwo)); // This should log 2
console.log(calulator.add(numberOne, numberTwo)); // This should log 12
console.log(calulator.subtract(numberOne, numberTwo)); // This should log 4
console.log(calulator.crazy(numberOne)); // This should log 5976

var crazy = calulator.crazy(numberOne);

var http = require('http');

http.createServer(function(req, res){
  res.writeHead(200);
  res.write('Here is our number: ' + crazy);
  res.end();
}).listen(5000); // doesn't need to be 5000
