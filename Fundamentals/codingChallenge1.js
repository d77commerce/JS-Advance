function tipCalc(){
    bill= 270;
    onert = 4;
let tips = bill <=300&&bill>=50? bill*0.15:bill* 0.20;
console.log(`Bill is ${bill} tip is ${tips} and total is ${bill+tips}.`);
}
tipCalc();