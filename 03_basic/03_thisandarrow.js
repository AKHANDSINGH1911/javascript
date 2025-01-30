//arrow function and use of this
const user = {
    username: "akhand",
    price: 999,

    welcomeMessage: function() {     
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }

}

// user.welcomeMessage() //akhand , welcome to website //bas itna hi ouput ayega agar // console.log(this); ye use nhi kiya to
//output:- after using // console.log(this);//

// akhand , welcome to website
// {
//     username: 'akhand',
//     price: 999,
//     welcomeMessage: [Function: welcomeMessage]
//   }
// line 16 to 21 output hai
//  user.username = "sam"
// user.welcomeMessage()// 

//  sam , welcome to website
// {
//   username: 'sam',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
//line 26 t0 30 pura outputhai

// console.log(this);  //{} empty hai kuki global mian kuch nhi bai

// function chai(){
    
//     console.log(this);
// }
// chai()   //bht kuch ayega output main

// function chai(){
//     let username = "akhand"
//     console.log(this.username);
// }

// chai()  //undefined // as this work on only object not on fn



// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai() // ismw bhi undefined as fn

//declare fn through arrow function
//function keyword hata do  aur parenthesis ke phle arrow => lga dijiye 
// ban gya arrow fn
const chai =  () => {
    let username = "akhand"
    console.log(this.username);
}
// chai() //undefined

const chai2 =  () => {
    let username = "akhand"
    console.log(this);
}
// chai2() // {} empty ayega

//arrow fn
//explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4))//7

//implicit return // agra ek hi line ho to parenthesis hta do
// curly brackets main return keyword likhna pdega
// const addTwo = (num1, num2) =>  num1 + num2  
                           //or
// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => {username: "akhand"}
console.log(addTwo(3, 4)) //undefined

const addTwo2 = (num1, num2) => ({username: "akhand"}) 
console.log(addTwo2(3, 4)) // { username: 'akhand' }
// note rap inso=ide bracket to return object


const myArray = [2, 5, 3, 7, 8]
// myArray.forEach()  //errr Array.forEach (<anonymous>)
const myArray2 = [2, 5, 3, 7, 8]
myArray2.forEach(() => {}) // no error 
              //or
myArray2.forEach( function () {}) // ye bhi shi syntax hai 
           //or
