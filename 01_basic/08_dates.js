//  Dates
// let myDate = new Date()   
// console.log(myDate)    //2025-01-28T22:02:50.078Z  //curent date and time og gmt

// console.log(myDate.toString());   //Tue Jan 28 2025 21:48:16 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());  //Tue Jan 28 2025
// console.log(myDate.toLocaleString()); //1/28/2025, 9:48:16 PM
// console.log(typeof myDate);  //object

// let myCreatedDate = new Date(2023, 0, 23)         //   1/23/2023, 12:00:00 AM
// let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)    //   1/23/2023, 5:03:00 AM
// let myCreatedDate3 = new Date("2023-01-14")        //   1/14/2023, 12:00:00 AM
// let myCreatedDate4 = new Date("01-14-2023")       //   1/14/2023, 12:00:00 AM
// // console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate2.toLocaleString());  
// console.log(myCreatedDate3.toLocaleString());
// console.log(myCreatedDate4.toLocaleString());

// let myTimeStamp = Date.now()       //timestamp needed in creating quiz and pole 
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000));

// let mydateofbirth= new Date("11-19-2002")
// console.log(mydateofbirth.toDateString())      Tue Nov 19 2002
// console.log(mydateofbirth.toLocaleString())     11/19/2002, 12:00:00 AM
// console.log(mydateofbirth.getTime());   //give time also with date in ms


let newDate = new Date()
// console.log(newDate);  // 2025-01-28T22:15:23.859Z
// console.log(newDate.getMonth() + 1);     //1 as jan month
// console.log(newDate.getDay());           // 2 as tue

// `${newDate.getDay()} and the time ` 

newDate.toLocaleString('default', {    //use ctrl+spacbar to view option
    weekday: "long",
    
})