//function declaration
function calcAge1 (birthY){
    return 2022-birthY;
}

console.log(calcAge1(1977));
//function expression
const calcAge2 = function(birthY){
    return 2022-birthY;
}

console.log(calcAge2(1977));
//Arrow function
const calcAge3 = birthY => 2022-birthY;
console.log(calcAge3(1977));

const YearsToPention = (birthY,firstName)=>{
    let age = 2022-birthY;
    let pention = 65-age;
    return `${firstName} retires in  ${pention} years `;
}
console.log(YearsToPention(1977,'Petre'))