let score = "100"

console.log(typeof score);

let valueInNumber = Number(score) //converting to number

console.log(typeof valueInNumber);
console.log(valueInNumber); // sometimes it may return NaN if we cannot convert it to a number ex: 100abc...

// but the type of NaN would be a number
// true = 1, false = 0;
//
//

let isLoggedIn =1; 
let isBoolean = Boolean(isLoggedIn);

console.log(isBoolean); //returns true

isLoggedIn = ""
isBoolean = Boolean(isLoggedIn)

console.log(isBoolean);

// 1 = true, 0 = false
// ""= false, "something/space"= true

//*********************************OPERATIONS***********************************************

let value =3
let negValue =-value // prints -3

let str1 = "hello"
let str2 ="world"
str3 = str1 + " " + str2

console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+ 2 +2 ); // prints 122 
console.log(1+2+"2"); // prints 32









