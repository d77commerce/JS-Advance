function evenElement(input) {
  let output = " ";
  for (let index = 0; index < input.length; index += 2) {
    output += input[index] + " ";
  }
  console.log(output);
}
evenElement([20, 30, 40, 50]);
