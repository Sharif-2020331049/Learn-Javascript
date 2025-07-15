
/* Object literal */

// const user = {
//     username: 'sharif',
//     loginCount: 9, 
//     signedIn: true,
//     getUserDetails: function(){
//         console.log(`Username: ${this.username}`);
//     }
// }

// console.log(user.getUserDetails());


/*  Constructor Function: 
    Constructor functions are used to create multiple instances 
    of an object with the same properties and methods.

    When you call a constructor function with new, JavaScript creates a new empty object. 
*/

function User(username, loginCount, isLogin){
    this.username = username;
    this.loginCount = loginCount;
    this.isLogin = isLogin;

   /* variable =  (argument which pass) 
      --> If we don't use `this` keyword it create global variable and assign value in this global variable
      --> by using `this` keyword, we create new properties for any instance in this object.
      // this.kasem = username; -> hote pare no error.
   */

 // method:
   this.greeting = function(){
      console.log(`Welcome! ${this.username}`);
   }



   /* constructor function implicitly return this contex . */
   return this;
    
}


// without new keyword:

// const userOne = User('sharif', 15, true);  //-> it refers global object 

/*
  If don't use `new` keyword:
  When you do not use the new keyword with a constructor function in JavaScript,
  the function does not create a new object with its own properties and `this` context.
  Instead, the `this` inside the function refers to the global object (in non-strict mode)
  or remains undefined (in strict mode).
  And everytime when we call User() method with new data it just overwrite it.
  That's why we have to use `new` keyword for creating new instance.
*/

const userOne = new User('sharif', 15, true);

/* userTwo overwrites userOne data. */
const userTwo = new  User('ChaiAurCode', 11, false);
// console.log(userOne);


// constructor : reference of constructor function -> User in this case
//  console.log(userOne.constructor);

// instance of
// console.log(userOne instanceof User);  // true


/*
 About `new` keyword: 
  i. When we use `new` keyword , an empty object created which is called instance.
  ii. construc function called for `new` keyword also argument pass.
  iii. by `this` keyword we inject arguments
  iv. return contex
*/