function printN(arr = [], n) {
  let array = arr;
  let newArray = [];
  for (let x = 0; x < array.length; x += n) {
    newArray.push(array[x]);
  }
  return newArray;
}
printN([2, 3, 4, 5, 6, 7], 2);
