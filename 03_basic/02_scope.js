// let a=10
// const b =20
// var c=30

// console.log(a) //10
// console.log(b) //20
// console.log(c) //30

//curly brackets mtlb  scope with if else
let a=300

if (true) {
    let a = 10
    const b = 20
    var c=30
    //c= 30     //var nhi likha to bhi chalega
    // console.log("INNER: ", a);   // print nnhi hoa a=10  as global declare a=300 print hoga
    
}

// console.log(a) // a is not defined wala error kyuki let global  hai
// console.log(b) //a is not defined wala error kyuki const gobal  hai
// console.log(c) //30  // 30 output ayega as var is local
//note agar var=300 global  main likha tab bhi c ki value 30 hi ayegi
// as var is local variable
//but if humne let a=300  global aur local a=30 kiya to a=300 print hoga kuki let is global

//_____________________________________________________________________________________________________________________________________
 
// function one(){
//     const username = "akhand"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website);  // error  as website ka scope  to andar hikhatam hogya 

//      two()  

// }
// one() //akhand as two execute hoga one  ko call  krte hi
 
// note:-- one sabse bada hai two chota hia to two one ko acces kar skta hai par one two komacces nhi kar skta hai
// example chota bade se icecream mang skta bai par bdaa chote se ice cream nhi  mang skta hai


if (true) {
    const username = "akhand"
    if (username === "akhand") {    // iska mtlb bhi true hai as username = akhand
        const website = " youtube"
        console.log(username + website); //akhand youtube
    }
    // console.log(website);  //error as out of scope
}

// console.log(username);  // error as username out of scope


// // ++++++++++++++++++ mini hoisting ++++++++++++++++++


console.log(addone(5)) //6

function addone(num){   //only declare therfore no error
    return num + 1
}



// addTwo(5)    //ReferenceError: Cannot access 'addTwo' before initialization
console.log(addTwo(5)) ////ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){   //declare + hold in  varibale therfore error
    return num + 2
}
//this is called hoisting  fn kaise declare karenge