function solve() {
  const inputText = document.querySelector("#input");
  const autput = document.querySelector("#output");
  console.log(inputText.value);
  inputText.value.split(".").forEach((element) => {
    const pEl = document.createElement("p");
    pEl.textContent = element;
    autput.appendChild(pEl);
  });
}
