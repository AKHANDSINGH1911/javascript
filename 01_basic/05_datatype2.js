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

// summary 
// 1)datatype : primitive and non primitive(reference)
// 2)memory: stack and heap memory
// stack used in primitive datatype( we get copy )
// heap used in  non primitive therfore we get refernce of original value
//if we change in refernce original wiill be change
//example of  primitive used in stack we get copy
let myname="akhand"
let anothername=myname
anothername="akhandsingh"  //change in copy
console.log(myname)           //no output change in original
console.log(anothername)    //name changes 

//exampe of non primitive in heap we get reference from userone stored in heap
let userone={
    email:"qwertyuiop",     //remember comma is imp otherwise errror
    upi:"asdfghjkl"      //ALSO : THIS sign is imp in object while assinging value
}
let usertwo=userone
// usertwo="zxcvbnm"   //wrong way to access object
//use dot operator to get access object(email hai yha object)
usertwo.email="zxcvbnm"
// console.log(usertwo)  //zxcvbnm
console.log(userone)  //{ email: 'qwertyuiop', upi: 'asdfghjkl' } ye ouput hoga
//to get ouput of object
console.log(userone.email)   //zxcvbnm
console.log(usertwo.email)   //zxcvbnm


