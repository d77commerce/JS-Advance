function oneDay(year, month, day) {
  let curanDay = new Date(year, month, day);
  curanDay.setDate(curanDay.getDate() - 1);
  console.log(curanDay.getFullYear());
  console.log(curanDay.getMonth());
}
oneDay(2016, 9, 30);
