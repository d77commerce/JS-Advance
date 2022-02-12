function extract(content) {
  let result = document.getElementById(content).textContent;
  //console.log(result);
  let regex = RegExp(/\((.+?)\)/, "g");
  let arr = result.match(regex);
  for (let i = 0; i < arr.length; i++) {
    while (arr[i].includes("(") || arr[i].includes(")")) {
      arr[i] = arr[i].replace("(", "");
      arr[i] = arr[i].replace(")", ";");
    }
  }
  return arr.join(";");
}
