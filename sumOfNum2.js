function sum(num1, num2) {
  let j = 0;
  let a = Number(num1);
  let b = Number(num2);
  for (let index = a; index <= b; index++) {
    j += index;
  }
  console.log(j);
}
sum(-8, 20);
