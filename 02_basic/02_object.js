// //object creation 2 types: 1)using literals 2) using constructor 
// // singleton form when custructor is used

// // 2.)Object.create   //consturctor method to create object

// // 1.)object literals

// const mySym = Symbol("key1")  //symbol declartion


// const JsUser = {               //create object
//      name: "akhand",       //1
//     "full name": "akhand singh", //2
//     [mySym]: "mykey1", //symbol    //3    // all 3 ways are right for intialization
//     age: 18,
//     location: "Jaipur",
//     email: "akhand@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }

// // console.log(JsUser.email)  //akhand@google.com //accesing object using dot 
// // console.log(JsUser["email"])  // akhand@google.com //accesing object using square bracket in special cases
// // console.log(JsUser["full name"]) //akhand singh
// // console.log(JsUser[mySym]) //mykey1

// // JsUser.email = "akhand@chatgpt.com" //chnage email or overwrite
// // Object.freeze(JsUser)  // now after freze cvannot change email
// // JsUser.email = "akhand@microsoft.com"
// // console.log(JsUser);
// // //output:-{
// //   name: 'akhand',
// //   'full name': 'akhand singh',
// //   age: 18,
// //   location: 'Jaipur',
// //   email: 'akhand@chatgpt.com',   //emailchanged
// //   isLoggedIn: false,
// //   lastLoginDays: [ 'Monday', 'Saturday' ],
// //   [Symbol(key1)]: 'mykey1'
// // // }


// JsUser.greeting = function(){   //adding function
//     console.log("Hello JS user"); 
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);  
//    //use (this)) to refernce same object created before
// }

// console.log(JsUser.greeting());  //Hello JS user
// console.log(JsUser.greetingTwo());//  Hello JS user, akhand

//______________________________________________________________________________

// object declartion using constructor or using  singleton

const tinderUser = new Object()  //singleton object
const tinderUser2 = {}    // non singleton object


// console.log(tinderUser); //{}
// console.log(tinderUser2);  //{} //same output as both have same meaning

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser); //{ id: '123abc', name: 'Sammy', isLoggedIn: false }



const regularUser = {            
    email: "some@gmail.com",
    fullname: {                        // nested object
        userfullname: {
            firstname: "akahnd",
            lastname: "singh"
        }
    }
} 

// console.log(regularUser.fullname);
//oupt:-{ userfullname: { firstname: 'akahnd', lastname: 'singh' } }
// console.log(regularUser.fullname.userfullname);
// //output:-{ firstname: 'akahnd', lastname: 'singh' }
// console.log(regularUser.fullname.userfullname.firstname);
// // output:-akahnd

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj3 = {5: "a", 6: "b"}

// const obj4 = { obj1, obj2 ,obj3}
// console.log(obj4);
// //output:- {
// //   obj1: { '1': 'a', '2': 'b' },
// //   obj2: { '3': 'a', '4': 'b' },
// //   obj3: { '5': 'a', '6': 'b' }
// // }
// const obj5 = Object.assign({}, obj1, obj2, obj3) 
// /// here obj1,obj2,obj3  are sources
// ///use assign:-Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
// console.log(obj5);  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// const obj6 = {...obj1, ...obj2,...obj3}  //another way same output 
// // this method is easy
// console.log(obj6); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email   //accees value
// console.log(tinderUser); //{ id: '123abc', name: 'Sammy', isLoggedIn: false }

// console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); //[ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser));  //[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  //true

//__________________________________________________________________________

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
console.log(course.courseInstructor); //hitesh //accesing and printing

//destructring
const navbar=({company})=>{

}
navbar(company="akhand")
console.log(navbar)   //[Function: navbar]

//json format
{
    // "name": "hitesh",
    // "coursename": "js in hindi",
    // "price": "free"
}              
//api call aisi hee ati hai mtlb aise hi format main

// [
//     {},
//     {},
//     {}
// ]      
//kabhi kabhi aise bhi api call ati hai
//ye sara json format hai