function sayMyName()
{
    console.log("Bread Roll")
    console.log(bye);
    
}
             //parameters
function add(num1,num2) 
{
    let prod = num1*num2;
    console.log(prod)
}
    //arguments
add(5,null) // gives 25 if one is string and 10 if both are numbers ... null can be considered as zero



function calculateCart(...no) //rest operator
{
    return no;
}

console.log(calculateCart(200,300,340)) // prints a list of 200 300 340

const BreadRoll = {
    username: "naman",
    rollNo : 36
}

function getObject(anyobject)
{
    console.log(`Username is ${anyobject["username"]} and Roll No. is ${anyobject["rollNo"]}`)
}

getObject(BreadRoll)




