// menggunakan function
// function getTotalNumber(param1, param2){
//     let result = param1 + param2;
//     return result;
// }

// menggunakan function arrow
// const getTotalNumber = (param1, param2) => {
//     let result = param1 + param2;
//     return result;
// }

// menggunakan ternary
const getTotalNumber = (param1, param2) => param1 + param2;

let firstVal = 90;
let secVal = 100;
let total = getTotalNumber(firstVal, secVal);

console.log(`Penjumlahan dari ${firstVal} dan ${secVal} = ${total}`);