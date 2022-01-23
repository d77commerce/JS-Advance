function bigHalfOfArr(arr) {
  let array = [];
  array = arr;
  let bigHalf = array.sort((a, b) => a - b);
  let numOutput = Math.ceil(bigHalf.length / 2);
  let output = bigHalf.splice(-numOutput);
  return output;
}
console.log(bigHalfOfArr([4, 7, 2, 5]));
console.log(bigHalfOfArr([3, 19, 14, 7, 2, 19, 6]));
