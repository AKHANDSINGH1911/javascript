// Maps :used for unique values and print in order and only once if repeated 

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map); 
//Map(3) {
//     'IN' => 'India',
//     'USA' => 'United States of America',
//     'Fr' => 'France'
//   }

for (const [key, value] of map) {      //loop in map
    // console.log(key, ':-', value);
//     //IN :- India
// USA :- United States of America
// Fr :- France
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
    // console.log(key, ':-', value);
    //error as  myObject is not iterable  object par nhi lga skte is tarah se
// }

//now how  to use for object // use for in loop
const myObject2 = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
//use for in loop for object 
for (const key in myObject2) {
    // console.log(`${key} shortcut is for ${myObject2[key]}`);
}//js shortcut is for javascript
// cpp shortcut is for C++
// rb shortcut is for ruby
// swift shortcut is for swift by apple//

const programming = ["js", "rb", "py", "java", "cpp"] //array

// for in loop in array
for (const key in programming) {
    // console.log(programming[key]); // to print key use these way
    //js
// rb
// py
// java
// cpp
// console.log(key) // only no will print 
//0
// 1
// 2
// 3
// 4
}
// note:- for of main values print hoti hai
// note:- for in main keys print hoti hai

const map2 = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map2) {
    console.log(key); // nothing will print
}
// note:- map is not iterable so we cant write these