// array in javascript resizable and can a mix of diff datatyape

// const myArr = [0, 1, 2, 3, 4, 5] //decalrwe araay
// // console.log(myArr[1]);  //1

// //javascript array copy operation create shallow copy
// //shallow copy share same reference (stack) jo bhi change karunga origunal aray main main bhi change hoga
// //deep copy do not share same refernce(heap)

// const myHeors = ["shaktiman", "naagraj"] //decalare array
// const myArr2 = new Array(1, 2, 3, 4) //declare array

// Array methods

// myArr.push(6)  //add
// myArr.push(7)  //add
// console.log(myArr)  //[0, 1, 2, 3, 4, 5, 6, 7]
// myArr.pop()     //deleete


// myArr2.push(6)  //add
// myArr2.push(7)  //add
// console.log(myArr2)  //[ 1, 2, 3, 4, 6, 7]

// myArr.unshift(9)
// console.log(myArr) //[9, 0, 1, 2,3, 4, 5] 9 aaded at first position
// myArr.shift()
// console.log(myArr) //[ 1, 2, 3, 4, 5 ] first element removed



// console.log(myArr.includes(9));  //false
// console.log(myArr.indexOf(3));    //3 as indexing start from 0

// const newArr = myArr.join() //join asdds all elemnets of array into sttring

// console.log(myArr);//  [ 0, 1, 2, 3, 4, 5 ]
// console.log( newArr);//  0,1,2,3,4,5    //string of array
//if we check type of newArr it is string

// slice, splice

// console.log("A ", myArr); //A  [ 0, 1, 2, 3, 4, 5 ]

// const myn1 = myArr.slice(1, 3) //include 1,2 not 3 as atart from 13

// console.log(myn1); //[ 1, 2 ]  slicing from 1,3
// console.log("B ", myArr);  //B  [ 0, 1, 2, 3, 4, 5 ]
//we get same array back after slicing
//slice return copy of section we want

//during splice we didnot get original array back 
//splice remove elemnt of array
// const myn2 = myArr.splice(1, 3)  //1 t0 3 will remove
// console.log("C ", myArr);  //  C  [ 0, 4, 5 ]
// console.log(myn2); //return array of removed elements // [ 1, 2, 3 ]
// //splice include last element
// ______________________________________________________________________________________________________________________

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // ek array main dusra array add krna

// console.log(marvel_heros); //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]); //flash

//array ke andar array agya hum ye nhi chahte therfore we use concat
// const allHeros = marvel_heros.concat(dc_heros)  //use of concat
// console.log(allHeros); //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//push work on existing array but concat form new array

// const all_new_heros = [...marvel_heros, ...dc_heros]//another way of writing

// console.log(all_new_heros);//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]//aray ke anadra araray ke anadara rray

// const real_another_array = another_array.flat(Infinity)
// //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// console.log(real_another_array); //[ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4,5]
// //all values spread out


console.log(Array.isArray("akahnd")) //false
console.log(Array.from("akahnd"))  // [ 'a', 'k', 'a', 'h', 'n', 'd' ]
console.log(Array.from({name: "akahnd"})) // [] ascannot convert diretly thefore return empty

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]