const spotifyUser = new Object() //empty singleton object

spotifyUser.userId = "123abc"
spotifyUser.userName = "Wade"
spotifyUser.isLoggedIn = true

// console.log(spotifyUser);

const regualarUser = {
    email : "some@hotmail.com",
    fullname : {
        firstname : "Wade",
        lastname : "Wilson",
    }

}

// console.log(regualarUser.fullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1 , obj2}

// const obj3 = Object.assign({}, obj1 , obj2) // assign(target, source) => {} is the target and rest are source 
//otherwise other objects will go into obj1

const obj3 = {...obj1, ...obj2}

console.log(obj3);

const users = [
    {
        email: "Hello@gmail.com"
    },
    {

    },
    {

    }
]

console.log(users[0].email)

const course = {
    coursename: "Js",
    price: "99",
    courseInstructor: "Wade"
}

const {courseInstructor: courseinst}= course //Created a variable using object's properties and destructured it

console.log(courseinst);

