//  Primitive
//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
 


// const score = 100
// const scoreValue = 100.3
// console.log(typeof scoreValue);  //number

// const isLoggedIn = false
// const outsideTemp = null
// console.log(typeof outsideTemp); //object
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(typeof anotherId);  //symbol

// console.log(id === anotherId);   //false output ayega as both are diff

const bigNumber = 3456543576654356754n  //bigint
console.log(typeof bignumber);   //undefined

//reference or non primitive:array,objects,function

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh", age: 22,
          
}   
console.log(typeof heros);     //object
console.log(typeof myObj)          //object                              

const myFunction = function(){
    console.log("Hello world");        
        //function
}
console.log(typeof myFunction);  //function



// https://262.ecma-international.org/5.1/#sec-11.4.3