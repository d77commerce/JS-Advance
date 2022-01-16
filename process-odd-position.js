function oddPosition(arr = []) {
  let newArr = [];
  for (let index = 0; index < arr.length; index++) {
    if (index % 2 != 0) {
      newArr.unshift(arr[index] * 2);
    }
  }
  console.log(newArr.join(" "));
}
oddPosition([1, 2, 1, 45, 65, 43]);
