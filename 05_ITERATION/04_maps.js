// Maps :used for unique values and print in order and only once if repeated 

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


console.log(map); 
//Map(3) {
//     'IN' => 'India',
//     'USA' => 'United States of America',
//     'Fr' => 'France'
//   }

for (const [key, value] of map) {      //loop in map
    console.log(key, ':-', value);
//     //IN :- India
// USA :- United States of America
// Fr :- France
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    //error as  myObject is not iterable 
    // object par nhi lga skte is tarah se
}