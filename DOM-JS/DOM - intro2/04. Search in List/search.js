function search() {
  let arrTowns = Array.from(
    document.querySelector("#towns").querySelectorAll("li")
  );
  //console.log(...arrayInTowns);
  arrTowns.forEach((e) => {
    e.style.fontWeight = "normal";
    e.style.textDecoration = "none";
  });
  let matches = 0;
  let input = document.getElementById("searchText").value;
  //console.log(input);
  arrTowns.forEach((e) => {
    if (e.textContent.includes(input)) {
      e.style.fontWeight = "bolder";
      e.style.textDecoration = "underline";
      matches++;
    }
  });
  document.getElementById("result").textContent = `${matches} matches found`;
}
