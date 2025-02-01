//syntax of switch

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}
//output:-  console.log("march");
// NOTE: BREAK BREAK THE CONTROL FLOW IF NOT USED THEN ALLL CASES WILL EXEXUTE


//______TRUTHY____________FALSY____________________________________________________________________________________________________________

const userEmail = []  //EMPTY ARRAY
if (userEmail) {
    console.log("Got user email"); //YE WALA PRINT HOGA COMPUTER NE TRUE MAN LIYA
} else {
    console.log("Don't have user email");
}
const userEmail = ""  //EMPTY STRING
if (userEmail) {
    console.log("Got user email"); 
} else {
    console.log("Don't have user email");//YE WALA PRINT HOGA COMPUTER NE FLASE MAN LIYA
}

const userEmail = "akhand" //value hai
if (userEmail) {
    console.log("Got user email");   //ye wala kyuki valise hai mtlb true hai
} else {
    console.log("Don't have user email");
}


// falsy values kaun kaun si hai
// false, 0, -0, BigInt 0n, ""(empty string), null, undefined, NaN

//truthy values kau  kaun si hai
// "0", 'false', " "(string with space), [](empty array), {}(empty object), function(){}(empty function as no parametr inside)

//check if arrray is empty
const userEmail2 = []  //EMPTY ARRAY
if (userEmail2.length === 0) {
    console.log("Array is empty"); //true
}

//check if object is empty
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty"); //true
}

// note:- false==0 (true), false=="" (true),0=="" (true)
_______________________________________________________________________________________________________________________________________________________
// Nullish Coalescing Operator (??):  work on null ,undefined

let val1;
// val1 = 5 ?? 10   //5 
// val1 = null ?? 10   //10
// val1 = undefined ?? 15  //15
val1 = null ?? 10 ?? 20    //10
console.log(val1);
___________________________________________________________________________________________________________________________________________________________
// Terniary Operator syntax

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
//output:-more than 80