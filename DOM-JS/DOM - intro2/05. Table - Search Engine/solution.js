function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    const btnSerch = document.getElementById("searchField").value.toLowerCase();
    // console.log(btnSerch);
    const arr = Array.from(
      document.querySelector("tbody").querySelectorAll("tr")
    );

    arr.forEach((x) =>
      x.textContent.toLowerCase().includes(btnSerch)
        ? (x.className = "select")
        : (x.className = "")
    )
  }
}
