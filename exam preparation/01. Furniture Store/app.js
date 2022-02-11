window.addEventListener("load", solve);
("use strict");

function solve() {
  //TO DO
  let model = document.getElementById("model");
  let year = document.getElementById("year");
  let description = document.getElementById("description");
  let price = document.getElementById("price");

  let btnMore = document.createElement("button");
  let buyNowBtn = document.createElement("button");

  btnMore.classList = "moreBtn";
  btnMore.innerHTML = "More Info";

  btnMore.addEventListener("click", function () {
    btnMore.classList.add("hide");
  
  });

  buyNowBtn.classList = "buyBtn";
  buyNowBtn.innerHTML = "Buy it";

  let addTr = document.createElement("tr");
  let addTableEl = document.getElementById("furniture-list").appendChild(addTr);
  let thEl = document.createElement("th");

  let thElPrice = document.createElement("th");

  let thElAct = document.createElement("th");

  let arr = [];
  let btt = document
    .getElementById("add")
    .addEventListener("click", function () {
      if (
        model.value &&
        year.value &&
        description.value &&
        price.value &&
        year.value > 0 &&
        price.value > 0
      ) {
        const addEl = function (...nubers) {
          arr = nubers;
        };
        addEl(model.value, year.value, description.value, price.value);
      }
      console.log(arr.length == 4 ? arr : "one3333333");

      thEl.textContent = arr[0];
      addTableEl.appendChild(thEl);

      thElPrice.textContent = arr[3];
      addTableEl.appendChild(thElPrice);

      thElAct.innerHTML = [btnMore, buyNowBtn];
      addTableEl.appendChild(btnMore);
      addTableEl.appendChild(buyNowBtn);
      //thEl.textContent = arr[1];
      //addTableEl.appendChild(thEl);

      console.log("model.textContent");
    });
}
