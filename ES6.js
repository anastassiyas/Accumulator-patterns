// ES5- Oldest most recognized version of js
// browser supported flexible familiar NPM packages 
// ES6
// introduced in 2015, easier Syntax, neat code, streamine
// confusing for older developers, harder to debug, browser support
// Yarn package manager 
// // //use strict
// // //enclosed in single quotes
//Goes at the top of a JS file 
// // //ends with a semicolon 
//template literal///
//newest way to concate strings (``)
const food= 'pasta';
const beverage= 'Pepsi';
const likeDessert= false;
// //🌺//Do this Change to template literal
console.log(`Food: ` + food + `` + `Drink ` + beverage + `` +likeDessert);
console.log(`Food: ${food}  Drink: ${beverage}  ${likeDessert}`)
//create a new set of data variables for character, age, place, super powers
character, age, place, super powers


console.log("My name is" + character + '' + "I am" + age +""+ "I am")
alert(`My name is ${character} I am ${age} I live in ${place}`)

// alert of the results using template literal 
// // const let 
//removes the need for hoisting 
//const constant global variable 
//let can be reassigned or declared local variables
// when in doubt go const 
  function varTest() {
    let x = 1;
    {
      let x = 2;  // different variable
      console.log(x);  // 2
    }
    console.log(x);  // 1
  }
// //   //🌺//Do this
  const i = 0
if (true) {
  let m = 1;
  let j= 2; 
  console.log(i + j); 
}
// //ternary operators
// (condition)  if ?   else : 
// condition goes in ( )
const age = 26;
const drink = (age >= 21) ? "Beer" : "Juice";
console.log(drink); //Beer 
// //🌺//Do this
const birthYear= 1990;
if(birthYear > 1997 || birthYear < 2020) {
  console.log("You inched by") 
} else {
  console.log("not today"); 
}
console.log(legal);

if (birthYear > 1997) else (birthYear < 2020 )

}
else (birthYear < 2020 )  "You inched by" : "You did not inched by";
  
}

// //🌺//Do this
// if (new Date().getHours() < 18) {
//   document.getElementById("demo").innerHTML = "Good day!";
// } else { console.log("Good evening") }
const day= (new Date().getHours()< 18) ('Good day') : getHours()> 18)("Good evening");


If (hour < 18)
If (hour < 18) {
console.log ("Good day");
} else {
console.log ("Good evening");
}


// //arrow functions
// // // Traditional Function
function sample (a){
    return( a + 100);
    
}
sample(16); 
    
// //   // Arrow Function Break Down
  
// //   // 1. Remove the word "function" and place arrow between the argument and opening body bracket
// //   (a) => {
// //     return a + 100;
// //   }
    (5);
  
// //   // 2. Remove the body brackets and word "return" -- the return is implied.
// //   (a) => a + 100;
  
// //   // 3. Remove the argument parentheses
// //   a => a + 100;
(100);
// //   //🌺//do this without parameters
// //   function greeting() {
        

function greeting() {
console.log('hello'); 
}

greeting = () => {console.log("hello")};
greeting()  
// //  //🌺//do this with parameters
        function meeting(name, age) {
          return 'hello and welcome to class' + name + age; 
        }
        meeting("John", 39);
        meeting("April", 30);
        meeting=(name,age) =>return "hello and welcome to class" + name +age;}
        meeting("april", 30);
// var x; 
// x = ( ) => {}  no param 
// x = (val) => {} one param
// x = val => { } one param
// x = (y,z) => {} two or more param 
// x= y, z => { } syntax error 
//   //Array methods
//.from Array.from() creates a brand new array based on conditions passed
let prices = [500, 700, 1000];
let taxed = Array.from(prices, price => price * 1.05);
console.log(taxed);
// // [525, 735, 1050]
// // // [525, 735, 1050]
// .fill overwrites anything in the array //reset 
//an easy way to fill up an array 
let prices = [500, 700, 1000];
prices.fill(2000);
console.log(prices);
// let prices = [500, 700, 1000];
// prices.fill(2000);
// console.log(prices);
// // Array [ 2000, 2000, 2000 ]
// // // Array [ 2000, 2000, 2000 ]
//.find  let prices = [500, 600, 700, 800, 900, 1000, 1500];
// let result = prices.find(price => price > 777);
// console.log(result);
// // let prices = [500, 600, 700, 800, 900, 1000, 1500];
// // let result = prices.find(price => price > 777);
// // console.log(result);
// // 800
// // // 800
//.map replaces the for loop
// // // pass a function to map
// // const map1 = array1.map(x => x * 2);
// //  //🌺//do this
//create an array of numbers
var numbers= [10, 12, 14, 16]; 
//.map to return a new array with the operations given *10
var newNums= numbers.map() 
function mine (num){
    return num * 10
}
console.log (newNums); 





