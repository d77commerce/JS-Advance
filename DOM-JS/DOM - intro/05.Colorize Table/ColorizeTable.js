function colorize() {
  let table = document.getElementsByTagName("tr");
  const arrTable = Array.from(table);
  arrTable.forEach((x, i) => {
    if (i % 2 != 0) {
      x.style.backgroundColor = "teal";
    }
  });
}
