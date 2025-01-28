// const score = 400
// console.log(score);  //400    
// //javascript ne khud se number man liya

// const balance = new Number(100) //define balance as number protype
// // console.log(balance); //[Number: 100]

// console.log(balance.toString().length); //3  // string main convert kiya
// console.log(balance.toFixed(1));  //100.0 if 2 100.00

// const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4))//123.9
// console.log(otherNumber.toPrecision(3))//124
// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));// 10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math); //Object [Math] {}
// console.log(Math.abs(-4)); //4
// console.log(Math.round(4.6)); //5
// console.log(Math.ceil(4.2)); //5
// // console.log(Math.floor(4.9)); //4
// console.log(Math.min(4, 3, 6, 8));//3
// console.log(Math.max(4, 3, 6, 8));//8

console.log(Math.random()); //kuch bhi random value ajyegi 0 and 1 ke bech main
console.log((Math.random()*10) + 1); +1 //mtlb hemsha 1 se bda hoga
console.log(Math.floor(Math.random()*10) + 1); //loor hmesha 1 hoga

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)// +min mtlb min=10 hi to hmesha 10 ke upar value ayegi
//random main sara random ayega kuch bhi exact har bar sam enhi hoga