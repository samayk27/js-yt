// arrays 

const myarray = [0,1,2,3,4,5]

console.log(myarray[1]);

// myarray.push(6)
// console.log(myarray);
// myarray.pop()
// console.log(myarray);

// myarray.unshift(9)  => adds 9 to the start
// console.log(myarray);
// myarray.shift()
// console.log(myarray);

console.log(myarray.includes(5)) //prints true/false if value is present

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

