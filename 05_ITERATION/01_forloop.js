
// for
// for (let index = 0; index < array.length; index++) {
    // const element = array[index];
// }
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number"); //5 is best number
        
    }
    // console.log(element);// 0 t0 10 no will print along 5 is best number at i=5
}

// console.log(element);

// for (let i = 1; i <= 2; i++) {
//     console.log(`Outer loop value: ${i}`);
//    for (let j = 1; j <= 2; j++) {
//     console.log(`Inner loop value ${j} and inner loop ${i}`);
//     console.log(i + '*' + j + ' = ' + i*j );
//    }
///////////////output/////////////////////////////////////////
// Outer loop value: 1
// Inner loop value 1 and inner loop 1
// 1*1 = 1
// Inner loop value 2 and inner loop 1
// 1*2 = 2
// Outer loop value: 2
// Inner loop value 1 and inner loop 2
// 2*1 = 2
// Inner loop value 2 and inner loop 2
// 2*2 = 4
// }
    /////////////////////////////////////////////////////////

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length); //3
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index]; 
  
    // console.log(element);
     ///////     //flash
              // batman
             // superman/////////////////
    
}


// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
   console.log(`Value of i is ${index}`);  //stop at 5
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);  //skip at 5
    
}
