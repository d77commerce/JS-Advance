function mathOperation(num, num2, mathOperator) {
  switch (mathOperator) {
    case "+":
      console.log(num + num2);
      break;
    case "-":
      console.log(num - num2);
      break;
    case "*":
      console.log(num * num2);
      break;
    case "/":
      console.log(num / num2);
      break;
    case "%":
      console.log(num % num2);
      break;
    case "**":
      console.log(num ** num2);
      break;
  }
}
mathOperation(2, 4, "*");
