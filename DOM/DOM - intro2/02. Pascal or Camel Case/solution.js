function solve() {
  //TODO...
  let textInput = document.getElementById("text").value;
  let type = document.getElementById("naming-convention").value;
  let result = "";
  if (type === "Camel Case") {
    for (let x = 0; x < textInput.length; x++) {
      if (textInput[x] === " ") {
        result += textInput[x + 1].toUpperCase();
        x++;
      } else {
        result += textInput[x].toLowerCase();
      }
    }
  } else if (type === "Pascal Case") {
  } else {
  }
  console.log(result);
}
