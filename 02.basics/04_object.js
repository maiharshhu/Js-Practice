//// we can create 2 types of object

// const tinderUser = new Object() //// - This is singleton object
const tinderUser = {} // Non singleton user

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "Some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Harsh",
            lastname: "Jain"
        }
    }
}

// console.log(tinderUser)

// // We can access element inside object using .
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// const obj3 = { obj1, obj2 }
// console.log(obj3); // This will return object inside object
// // To get rid of this we can use 
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = { ...obj1, ...obj2 }
// console.log(obj3);

// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com",
//     }, {
//         id: 2,
//         email: "p@gmail.com",
//     },
//     {
//         id: 3,
//         email: "c@gmail.com",
//     },
// ]

// console.log(users[0].email)
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// // Returns an array of key/values of the enumerable own properties of an object
// console.log(Object.entries(tinderUser));

// ////Determines whether an object has a property with the specified name.
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: 'Js in hindi',
    price: "999",
    courseInstructor: "hitesh"
}

// //--------------Destructuring feature --------------------------
// course.courseInstructor

const { courseInstructor: instructor } = course

// console.log(courseInstructor);

console.log(instructor);
// In React framework we have some methods like below object
// // **Note for future purposes** 
const navbar = ({ comapany }) => {

}
navbar(comapany = "harsh")


// json
// {
//     "name": "Harsh",
//     "coursename": "js in hindi",
//     "price": "free",
// }





