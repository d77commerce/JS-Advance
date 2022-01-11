"use strct";
function tipCalculator() {
  function calcTips(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
  const tips = [];
  const totals = [];
  const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

  for (let i = 0; i < bills.length; i++) {
    tips.push(calcTips(bills[i]));
    totals.push(bills[i] + tips[i]);
  }
  console.log(tips);
  console.log(totals);
  function calcAverage(arr) {
    let numm = 0;
    for (let i = 0; i < arr.length; i++) {
      numm += arr[i];
    }
    return numm / arr.length;
  }
  console.log(`total tips ${calcAverage(tips)}`);
  console.log(`total  of totals ${calcAverage(totals)}`);
}
tipCalculator();
