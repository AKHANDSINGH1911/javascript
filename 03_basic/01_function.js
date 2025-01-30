
// function sayMyName(){
//     console.log("A");
//     console.log("K");
//     console.log("H");
//     console.log("A");
//     console.log("N");
//     console.log("D");
// }

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }
// addTwoNumbers()  //NaN  as number not given
// addTwoNumbers(3, 5)  //8
//addTwoNumbers(3, "5")    //35
//addTwoNumbers(3, "a")    //3a
// addTwoNumbers(3,null)      //3
//note:- fn ke declartion main parameter aur fn call main argument

// function addTwoNumbers(number1, number2){
    
//     console.log(number1 + number2);
//     // return number1 + number2
// }

// const result = addTwoNumbers(3, 5)  //8

// console.log("Result: ", result); //Result:  undefined
// // when we does not write return statement
// console.log("Result: ", result);  //Result:  8
// // after writing return statemnt  kyuki result ka mtlb hai kya vapas bheja function ne
//note:- return ke bad kuch bhi print nhi hoga

function loginUserMessage(username){
    if(username  === undefined ){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
loginUserMessage("akahnd") // does not return anything as we doen not give print statement
// console.log(loginUserMessage("akahnd"))   //akahnd just logged in
// console.log(loginUserMessage("akhand"))   //akhand just logged in
// console.log(loginUserMessage("")) //just logged in // empty string

//___shopping card_____________________________________________________________________________________________________

// function calculateCartPrice1(num1){
//     return num1
// }
// console.log(calculateCartPrice1(200)) //200

// //rest operator  ... dot dot dot
// function calculateCartPrice2(...num1){
// //     return num1
// }
// console.log(calculateCartPrice2(200,400,500,2000)) //[ 200, 400, 500, 2000 ]
// //we get array of values using rest operator

// function calculateCartPrice3(value1,value2,...num1){
//     return num1
// }
// console.log(calculateCartPrice3(200,400,500,2000)) // [ 500, 2000 ]
// // as val1 =200,val2=400 baki num1 and we print num1


// const user = {        //object creation
//     username: "hitesh",
//     price: 199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// handleObject(user) //Username is hitesh and price is 199

//  handleObject({
//     username: "sam",
//     price: 399
// })        //Username is sam and price is 399 pass direct object

const myNewArray = [200, 400, 100, 600]   //array creation

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray)); //400
console.log(returnSecondValue([200, 600, 500, 1000])); //600