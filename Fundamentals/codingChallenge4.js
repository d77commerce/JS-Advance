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
    testArray3 = [];
    for (let i = 0; i < bills.length; i++) {
        testArray3.push( bills[i]*0.20);
        
    }
    for (let i = 0; i < testArray3.length; i++) {
        console.log(testArray3[i]);
    
    }
    for (let i = 0; i <testArray3.length; i++) {
        if(testArray3[i] === 111)continue;
        console.log(testArray3[i], typeof testArray3[i]);
    }
    for (let i = 0; i <testArray3.length; i++) {
        if(testArray3[i] !== 111)continue;
        console.log(testArray3[i], typeof testArray3[i]);
    }
    for (let i = 0; i <testArray3.length; i++) {
        if(testArray3[i] === 111)break;
        console.log(testArray3[i], typeof testArray3[i]);
    }
    for (let i = testArray1.length; i > 0; i--){
        console.log(`${testArray1[i-1]} and minus ${i+i}`)      
    }

    for (let i = 0; i < testArray1.length; i++) {
       console.log(`============= ${i} Head`);
       for (let j = 0; j < 4; j++) {
           console.log(`in line${j+1}`);
       }
    }
}
tipsArray();