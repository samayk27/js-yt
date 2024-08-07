// Singleton

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Wade", // behind the scene, name is interpreted as a string "name"
    1 : "number",
    mySym : "myKey1", //STRING
    [mySym] : "Hello" //SYMBOL
}

console.log(JsUser.name) //can be used only for string keys
console.log(JsUser["name"]); //other way of accessing objects
console.log(JsUser[1]);
console.log(JsUser[mySym]); // used as a symbol
console.log(JsUser.mySym); // used as a string

