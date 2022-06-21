class Calculator {
  constructor() {}
  add(num1, num2) {
    return num1 + num2;
  }
  substract(num1, num2) {
    return num1 - num2;
  }
  multiply(num1, num2) {
    return num1 * num2;
  }
  divide(num1, num2) {
    return num1 / num2;
  }
}

const calculator = new Calculator();

console.log(calculator.add(5, 10));
console.log(calculator.substract(5, 10));
console.log(calculator.multiply(5, 10));
console.log(calculator.divide(5, 10));
