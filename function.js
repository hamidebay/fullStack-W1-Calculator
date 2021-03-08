//summit two numbers
function addition(num1, num2) {
  return num1 + num2;
}

//subtract two numbers
function subtraction(num1, num2) {
  return num1 - num2;
}

//multiplicate two numbers
function multiplication(num1, num2) {
  return num1 * num2;
}

//divide two numbers
function division(num1, num2) {
  return num1 / num2;
}

module.exports = {
  add: addition,
  sub: subtraction,
  mult: multiplication,
  div: division,
};
