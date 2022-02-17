window.addEventListener("load", solution);

function solution() {
  const fullName = document.getElementById("fname");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const address = document.getElementById("address");
  const pCode = document.getElementById("code");
  let ulElement = document.getElementById("infoPreview");
  const btnSubmit = document.getElementById("submitBTN");
  btnSubmit.addEventListener("click", function () {
    let mapEl = new Map([
      ["Full Name:", fullName.value],
      ["Email:", email.value],
      ["Phone Number:", phone.value],
      ["Address:", address.value],
      ["Postal Code:", pCode.value],
    ]);
    console.log(mapEl);
    for (const [key, value] of mapEl) {
      let liEl = document.createElement("li");
      liEl.textContent = key + " " + value;
      ulElement.appendChild(liEl);
      console.log(value);
    }
    fullName.value = "";
    email.value = "";
    phone.value = "";
    address.value = "";
    pCode.value = "";
    btnSubmit.disabled = true;
  });
}
