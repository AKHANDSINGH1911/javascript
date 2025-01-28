// const name = "akhand"
// const repoCount = 50

// // use ` ` backtext(string interpollantion come into play means we create place holder)
// console.log(name + repoCount + " Value"); //akhand50 Value

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// //output: Hello my name is akhand and my repo count is 50

// const gameName = new String('akhandsingh')  //string declartion

// console.log(gameName[0]);  // a
// console.log(gameName.__proto__);  //access prototype 
// //output {} as now it is empty

// console.log(gameName.length); //11
// console.log(gameName.toUpperCase()); //AKHANDSINGH
// console.log(gameName.charAt(2));  //h
// // console.log(gameName.indexOf('t'));  //-1 as not presentt

// //breaking of string
// const newString = gameName.substring(0, 4) //substring doesnot obey negative value only slice obey
// console.log(newString);  //akha

// const anotherString = gameName.slice(-11, 4)
// console.log(anotherString);  //akha 
// const anotherString2 = gameName.slice(-8,6)
// console.log(anotherString2); //and 
// const newStringOne = "   akhand   "
// console.log(newStringOne);  //   akhand   space is also printed both front and back
// console.log(newStringOne.trim());  //akhand   space is trim 

// const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-')) //https://hitesh.com/hitesh-choudhary

// console.log(url.includes('sundar'))  //false

const gameName3= new String('akhand-pratap-singh') 
console.log(gameName3.split('-')); //[ 'akhand', 'pratap', 'singh' ]here '-' is splitter