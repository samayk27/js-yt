let a = 1
const b =2
var c = 9


if(true)
{
    let a= 21
    var c= 30 
    console.log(a); // prints 21 within the scope
    console.log(c); // prints 30 
    
}

console.log(a);  // prints 1 outside the scope
console.log(c); // prints 30, should have printed 9 outside the scope 

