function bigestElement(input) {
  let arr = input;
  let num = Number(arr[0][0]);

  for (let i = 0; i < arr.length; i++) {
    for (let y = 0; y < arr[i].length; y++) {
      if (arr[i][y] > num) {
        num = arr[i][y];
      }
    }
  }
  return num;
}
console.log(
  bigestElement([
    [20, 50, 10],
    [8, 33, 145],
  ])
);
