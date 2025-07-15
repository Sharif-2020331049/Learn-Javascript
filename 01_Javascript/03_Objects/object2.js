// const tinderUser = new Object();
const tinderUser = {};
// console.log(tinderUser);
tinderUser.name = "sharif";
tinderUser.location = "sylhet";
// console.log(tinderUser);

const regularUser =
{
  id : "124abf2", 
  location : "Dhaka",
  fullName: {
     userName :{
        firstName : "Sahidur",  
        lastName : "Rahman", 
        nickName : "Sharif"
     }
  }
}


// console.log(regularUser.id);
// delete regularUser.id;
// console.log(regularUser.id);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userName);

const obj1 = { 1: "a", 2: "b"};
const obj2 = { 3 : "c", 4 : "d"};


// two object combine Object.assign() -> in this case two objects
//  combine in obj1(first object) . that means obj1 change 
// const obj3 = Object.assign(obj1, obj2);

// empty object which is now obj3  that fill up obj1 and obj2 combine . obj2 won't be changed
// const obj3  = Object.assign({}, obj1, obj2);
// console.log(obj3);


// most of time we use -> spred syntex
const obj3 = {...obj1, ...obj2};


// array of objects 

const User = [
    {
      id: "1", 
      email : "sharif@gmail.com"
    }, 
    {
      id: "2", 
      email : "sharif@gmail.com"
    },
    {
      id: "3", 
      email : "sharif@gmail.com"
    },
    {
      id: "4", 
      email : "sharif@gmail.com"
    },
    {
      id: "5", 
      email : "sharif@gmail.com"
    },
    {
      id: "6", 
      email : "sharif@gmail.com"
    },
    {
      id: "7", 
      email : "sharif@gmail.com"
    }
]

// access array of objects

// console.log(User[0].email);

// object all key -> we use in database _-> formed array
// console.log(  Object.keys(tinderUser));
// console.log(  Object.values(tinderUser));

// all properties formed array . [[first element key -> value], [2nd element key-> value]] of array

// console.log(Object.entries(tinderUser));


// check any properties lies under the object 
//  return true or false
// console.log(tinderUser.hasOwnProperty("location"));


/* Object De-Structuring  */

const course = {
    couseName : "Js in hindi", 
    coursePrice : 999, 
    courseInstructor : "hitesh"
}

// we can access element 
// console.log(course.courseInstructor);
// console.log(course.couseName);

// but it is painful to write course. everytime 

// const {courseInstructor: Instructor, coursePrice:price} = course;
// console.log(Instructor);
// console.log(price);
