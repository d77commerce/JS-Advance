window.addEventListener("load", solution);

function solution() {
  const fullName = document.getElementById("fname");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const address = document.getElementById("address");
  const pCode = document.getElementById("code");
  let ulElement = document.getElementById("infoPreview");
  const blockEl = document.getElementById("block");
  const btnSubmit = document.getElementById("submitBTN");
  const btnContinue = document.getElementById("continueBTN");
  const btnEdit = document.getElementById("editBTN");
  btnSubmit.addEventListener("click", function () {
    if (!fullName.value || !email.value) {
      return;
    }
    let mapEl = new Map([
      ["Full Name:", fullName.value],
      ["Email:", email.value],
      ["Phone Number:", phone.value],
      ["Address:", address.value],
      ["Postal Code:", pCode.value],
    ]);
    // console.log(mapEl);
    for (const [key, value] of mapEl) {
      let liEl = document.createElement("li");
      liEl.textContent = key + " " + value;
      ulElement.appendChild(liEl);
      // console.log(value);
    }
    fullName.value = "";
    email.value = "";
    phone.value = "";
    address.value = "";
    pCode.value = "";
    btnSubmit.disabled = true;
    btnContinue.disabled = false;
    btnEdit.disabled = false;
    btnEdit.addEventListener("click", function () {
      ulElement.innerHTML = "";
      btnSubmit.disabled = false;
      btnContinue.disabled = true;
      btnEdit.disabled = true;
      fullName.value = mapEl.get("Full Name:");
      email.value = mapEl.get("Email:");
      phone.value = mapEl.get("Phone Number:");
      address.value = mapEl.get("Address:");
      pCode.value = mapEl.get("Postal Code:");
      mapEl.clear();
    });
    btnContinue.addEventListener("click", function () {
      mapEl.clear();
      // mapEl.clear();
      //  ulElement.innerHTML = "";
      const h3El = document.createElement("h3");
      h3El.textContent = "Thank you for your reservation!";
      blockEl.innerHTML = "";
      blockEl.appendChild(h3El);
    });
  });
}
