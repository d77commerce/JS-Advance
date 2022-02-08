function obj(input) {
  const num = input.length;
  let output = {};
  for (let index = 0; index < num; index += 2) {
    output[input[index]] = Number(input[index + 1]);
  }
  console.log(output);
}
obj(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
