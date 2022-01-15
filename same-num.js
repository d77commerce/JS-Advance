function sameNum(num) {
  let input = num.toString();
  let sum = 0;
  let curent = input[0];
  let x = true;

  for (let index = 0; index < input.length; index++) {
    sum += Number(input[index]);
    if (input[index] !== curent) {
      x = false;
    }
  }
  if (x == true) {
    console.log(true);
  } else {
    console.log(false);
  }
  console.log(sum);
}
sameNum(22222);
