function pie(arr, start, end) {
  let startOut = arr.indexOf(start);
  let endOut = arr.indexOf(end);
  let out = arr.slice(startOut, endOut + 1);
  return out;
}
console.log(
  pie(
    [
      "Pumpkin Pie",
      "Key Lime Pie",
      "Cherry Pie",
      "Lemon Meringue Pie",
      "Sugar Cream Pie",
    ],
    "Key Lime Pie",
    "Lemon Meringue Pie"
  )
);
