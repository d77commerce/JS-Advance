function cookingByNum(num, proces1, proces2, proces3, proces4, proces5) {
  let output = Number(num);
  function chop(input) {
    return (output = input / 2);
  }
  function dice(input) {
    return (output = Math.sqrt(input));
  }
  function spice(input) {
    return (output = input + 1);
  }
  function bake(input) {
    return (output = input * 3);
  }
  function fillet(input) {
    return (output = input * 0.8);
  }
  switch (proces1) {
    case "chop":
      chop(output);
      break;
    case "dice":
      dice(output);
      break;
    case "spice":
      spice(output);
      break;
    case "bake":
      bake(output);
      break;
    case "fillet":
      fillet(output);
      break;
  }
  console.log(output);
  switch (proces2) {
    case "chop":
      chop(output);
      break;
    case "dice":
      dice(output);
      break;
    case "spice":
      spice(output);
      break;
    case "bake":
      bake(output);
      break;
    case "fillet":
      fillet(output);
      break;
  }
  console.log(output);
  switch (proces3) {
    case "chop":
      chop(output);
      break;
    case "dice":
      dice(output);
      break;
    case "spice":
      spice(output);
      break;
    case "bake":
      bake(output);
      break;
    case "fillet":
      fillet(output);
      break;
  }
  console.log(output);
  switch (proces4) {
    case "chop":
      chop(output);
      break;
    case "dice":
      dice(output);
      break;
    case "spice":
      spice(proces4);
      break;
    case "bake":
      bake(output);
      break;
    case "fillet":
      fillet(output);
      break;
  }
  console.log(output);
  switch (proces5) {
    case "chop":
      chop(output);
      break;
    case "dice":
      dice(output);
      break;
    case "spice":
      spice(output);
      break;
    case "bake":
      bake(output);
      break;
    case "fillet":
      fillet(output);
      break;
  }
  console.log(output);
}
cookingByNum("9", "dice", "spice", "chop", "bake", "fillet");
