// for of

// ["", "", ""] //array ke andr string
// [{}, {}, {}]  // array ke andr object

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num); 
    //1
    // 
    // 3
    // 4
    // 5
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
// Each char is H
// Each char is e
// Each char is l
// Each char is l
// Each char is o
// Each char is  
// Each char is w
// Each char is o
// Each char is r
// Each char is l
// Each char is d
// Each char is !
}