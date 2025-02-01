// note:- var ka scope completely global hai

// if
const isUserloggedIn = true
const temperature = 41

if ( temperature === 40){
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50"); // this will print as temp=41
}
if ( temperature === 41){
    console.log("less than 50");//this will execute
} else {
    console.log("temperature is greater than 50"); 


// <, >, <=, >=, ==, !=, ===, !==
//note:- it check is equal to and also checks its type
//example
console.log(2=="2");  //true as donot check datatype
console.log(2==="2"); //false as number!= string datatype
console.log(2!="2");//false
console.log(2!=="2"); //true as both data type is not same one is number and other is string

//use of let in scope

// const score = 200
// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);  //user power:fly
// }
// console.log(`User power: ${power}`);  //power is not defined wala error
 
//use of var

// const score = 200
// if (score > 100) {
//     var power = "fly"
//     console.log(`User power: ${power}`);  //user power:fly
// }
// console.log(`User power: ${power}`); //user power:fly
//Note:- here in both output will show  and no error 
//power bhr bhi access ho rha hai as var ka scope completely global
//ye dangerous hai kyuki variable kabhi bhi scope ke bhr nhi jana chaiye code safe rhega
//so use let always inside local block of code

/* short hand code*/ //Implicitally// but dont use it just for knowldge

// const balance = 1000
// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if (userLoggedIn && debitCard && 2==3) {
//     console.log("Allow to buy course");  // doen not run 
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
//     console.log("User logged in");  // run as one part is true in or ||
// }
