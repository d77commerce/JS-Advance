function tipsArray(){
 function calcTip(bill){
     return bill >=50 && bill <=300? bill * 0.15:bill * 0.20;
 }
 const bills = [125,555,44];
 const testArray = [];
 const testArray1 = [];

 const tips = new Array(calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2]));
 console.log(tips);
    for (let index = 0; index <= 10; index++) {
        console.log(`index of ${index}`) 
    }
    for (let a = 0; a < bills.length; a++) {
        console.log(bills[a]);
        testArray[a] = bills[a];
        testArray1.push(bills[a]);
    }
    console.log(testArray);
    console.log(testArray1);

}
tipsArray();