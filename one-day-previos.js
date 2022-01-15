function oneDay(year, month, day) {
  let curanDay = new Date(year, month, day);
  curanDay.setDate(curanDay.getDate() - 1);
  console.log(
    `${curanDay.getFullYear()}-${curanDay.getMonth()}-${curanDay.getDate()}`
  );
}
oneDay(2018, 10, 0);
