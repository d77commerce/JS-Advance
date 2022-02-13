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
    result += textInput[0].toUpperCase();
    for (let x = 1; x < textInput.length; x++) {
      if (textInput[x] === " ") {
        result += textInput[x + 1].toUpperCase();
        x++;
      } else {
        result += textInput[x].toLowerCase();
      }
    }
  } else {
    result = "Error!";
  }
  document.getElementById("result").textContent = result;
}
