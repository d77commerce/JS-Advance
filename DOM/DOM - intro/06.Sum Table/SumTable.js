function sumTable() {
  let num = 0;
  let total = document.getElementsByTagName("td");
  const arrTotal = Array.from(total);

  for (const x in arrTotal) {
    if (x % 2 != 0) {
      num += Number(arrTotal[x].textContent);
    }
  }
  console.log(num);
  document.getElementById("sum").textContent = num;
}
