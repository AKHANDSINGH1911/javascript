
let index = 0
while (index <= 10) {
    // console.log(`Value of index is ${index}`);
    index = index + 2 //condition
}
//////////////////////////output///////////////
// Value of index is 0
// Value of index is 2
// Value of index is 4
// Value of index is 6
// Value of index is 8
// Value of index is 10
// ////////////////////////////////////////////////////

let myArray = ['flash', "batman", "superman"]
let arr = 0
while (arr < myArray.length) {
    // console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}
//////////////////////
// Value is flash
// Value is batman
// Value is superman
// ///////////////////////////////////////////

/////////////DO WHILE (ENTRY CONTROL LOOP) //////////////
let score = 1
do {
    console.log(`Score is ${score}`);  //Score is 11 
    score++
} while (score <= 10);
//////////////////////////////////////
// Score is 1
// Score is 2
// Score is 3
// Score is 4
// Score is 5
// Score is 6
// Score is 7
// Score is 8
// Score is 9
// Score is 10
///////////////////////////////////////////

let score2 = 11
do {
    console.log(`Score is ${score2}`);  //Score is 11 
    score2++
} while (score2 <= 10);