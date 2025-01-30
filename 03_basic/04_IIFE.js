// Immediately Invoked Function Expressions (IIFE)

// function chai2(){
//     console.log(`DB CONNECTED`);  
// }
//  chai2()  // DB CONNECTED
        
// jaise fn likha turant execute karvana hai
//immediate invoke
// bracket main bhar do pur fn ko 
// (function chai(){
//     // named IIFE
//     console.log(`DB CONNECTED`);  // DB CONNECTED
// })()

//gobal scope ke pollution se kyi baar problem hoti hai isliye hum iffe ka use krte hai
  
// using arrow fn

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);  // DB CONNECTED
})();       // note we use semicolon in these to execute chai2 
// as phla code end hona chiye dusre code ko run karne ke liye
( function chai2() {
    console.log(`DB CONNECTED TWO `);
} )();          //DB CONNECTED TWO akhand
( () =>{
    console.log(`DB CONNECTED Three`);  //DB CONNECTED Three
} )();   //arrow fn

( (name) =>{   // simple iife
    console.log(`DB CONNECTED Three ${name}`);  //DB CONNECTED Three akhand
} )("akhand")  

// note we use semicolon in each block of code at end   to execute last block of code 
// as phla code end hona chiye dusre code ko run karne ke liye
// nhi to error dega