function sequenseK(n, k) {
  sum = [1];

  for (let index = 0; index < n - 1; index++) {
    let x = index;
    let newNum = 0;
    for (let y = 0; y < k; y++) {
      if (sum[x] > 0) {
        newNum += Number(sum[x]);
      }
      x--;
    }
    if (newNum <= 0) {
      newNum = 1;
    }
    sum.push(newNum);
  }
  return sum;
}
sequenseK(8, 2);
