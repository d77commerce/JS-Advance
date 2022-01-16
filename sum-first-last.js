function sumFirstLast(input) {
  // let first = Number(input[0]);
  // let last = Number(input[input.length - 1]);
  return Number(input.pop()) + Number(input.shift());
}
sumFirstLast([20, 30, 40]);
