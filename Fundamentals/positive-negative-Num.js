function one(arr) {
  let Output = [];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] < 0) {
      Output.unshift(arr[index]);
    } else {
      Output.push(arr[index]);
    }
  }
  console.log(Output.join("\n"));
}
one([7, 6, 4, -5, -9, 3, -1]);
