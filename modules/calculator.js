// // This works!!
// module.exports.multiply = function(firstNumber, secondNumber) {
//   return firstNumber * secondNumber;
// };

// // This works!!
// module.exports = {
//   multiply: function(firstNumber, secondNumber) {
//     return firstNumber * secondNumber;
//   }
// }
var number747 = require('./utils/some-number.js');

function multiplication(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function division(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
}

function subtraction(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

function addition(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function the747(firstNumber){
  return firstNumber * number747;
}

module.exports = {
  multiply: multiplication,
  divide: division,
  subtract: subtraction,
  add: addition,
  crazy: the747
}
