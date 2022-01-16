function smalTwo(input) {
  let arr = [];
  arr = input;
  let min = arr[0];
  for (let index = 0; index < arr.length; index++) {
    if (min > arr[index]) {
      min = arr[index];
    }
  }
  arr.splice(arr.indexOf(min), 1);
  // console.log(arr);
  let min2 = arr[0];
  for (let index = 0; index < arr.length; index++) {
    if (min2 > arr[index]) {
      min2 = arr[index];
    }
  }
  console.log(min + " " + min2);
  console.log();
}
smalTwo([1, 56, 3, 22, 67, 45, 51]);
