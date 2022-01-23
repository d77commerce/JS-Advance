function dayOfWeek(day) {
  let a;
  switch (day) {
    case "Monday":
      a = 1;
      break;
    case "Tuesday":
      a = 2;
      break;
    case "Wednesday":
      a = 3;
      break;
    case "Thursday":
      a = 4;
      break;
    case "Friday":
      a = 5;
      break;
    case "Saturday":
      a = 6;
      break;
    case "Sunday":
      a = 7;
      break;
  }
  if (typeof a == "undefined") {
    console.log("error");
  } else {
    console.log(a);
  }
}
dayOfWeek("Saeeturday");
