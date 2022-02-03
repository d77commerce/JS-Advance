function diagonal(input) {
  let arr = input;
  let diagonal1 = 0;
  let diagonal2 = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let y = 0; y < arr[i].length; y++) {
      if (i === y) {
        diagonal1 += arr[i][y];
      }
      if (i + y === arr.length - 1) {
        diagonal2 += arr[i][y];
      }
      // console.log(arr[i][y]);
    }
  }
  console.log(diagonal1, diagonal2);
}

diagonal([
  [20, 40],
  [10, 60],
]);

diagonal([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
