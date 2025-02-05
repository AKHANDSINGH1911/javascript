const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){ //callback function isliye nam nhi hai
    // console.log(val);
//js
// ruby
// java
// python
// cpp
} )

coding.forEach( (item) => {  // using arrow function
    // console.log(item); // same output
} )

// function printMe(item){
    // console.log(item);
// }
// coding.forEach(printMe) // same output

coding.forEach( (item, index, arr)=> {
    // console.log(item, index, arr);
// output:-
// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]

} )

const myCoding = [      //object
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
// javascript
// java
// python
} )