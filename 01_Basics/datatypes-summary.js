//Primitive Data Types

//7 Types : String, Number, null, Boolean, undefined, Symbol, BigInt

const id = Symbol('123')
const secondId =Symbol('123')

console.log(id===secondId) //returns false

//Dynamically Typed language: Means that variables can hold data of any type till runtime, Data  type is not declared before compile time.

//Reference Type (Non Primitive)

//Objects, Arrays, Functions

const heroes = ['Steve Rogers', 'Tony Stark','Bruce Banner','Scott Lang']

let obj = {

    myName: "Wade Wilson",
    myAge: "Pretty Old",
}

const myFunction = function(){
    console.log("Hello World");
}

//typeOf Null === Object

//++++++++++++++++++++++++++++++++++++++++++

//Stack Memory= Primitive Data Types
//Heap Memory = Non Primitive Data Types

