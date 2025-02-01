//javascript execution context- 2 phase
// {} global execution context 
// function ec
// eval ec// use in moongoose  not usually use 

// two phase 
// 1.memory creation phase  //memory allocation
// 2.execution phase // opeartion performed

// lec 26 call stack procedure screenshot taken view it

//chrome -> inspect-> sources
//  workspace ke side mai >> aisa arrow hoga uspar 
// snippet -> new snippet -> write code

//neche hume breakpoints ,call stack bhi dikhega
//click on line  code number  to break point apply hojyega
 //now run and check call stack it will show you line by line execution 
  
 //example
 function one()
{ console.log("one")
 two()
}
function two()
{ console.log("two")
 three()
}
function three()
{ console.log("three")
}
one()
two()
three()
 //execution
1. //one() two() three()
// three will delete two will delete one will complete and delete
2.// two() three()
// three will delete two will complete and delete
3.//three() 
// three will complete 
//call stack will end its operation

