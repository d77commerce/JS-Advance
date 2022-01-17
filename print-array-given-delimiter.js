function printArray(arr = [], delimiter) {
  let array = arr;
  console.log(array.join(delimiter));
}
printArray([1, 2, 3, 2, 4], "-");
