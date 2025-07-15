
/*
  -> JS is prototype-based language means it always check parents, grand-parents, grand-grand parents to find
     properties . It never give up or show error untill it checks over. Like prototypal inheritance.


    ## Prototype-Based Language
     JavaScript is a prototype-based language, meaning that objects can inherit properties from other objects. 
     This inheritance is implemented through a prototype chain, where objects have a prototype object,
     and the prototype itself can have a prototype, and so on, forming a chain.

     // everything is object in js
      Array -----> Object <-------- String
                    |
                    v
                  null

    // In JavaScript, functions can behave like both functions and objects.
 */


 function multiplyBy5(num){
    return num*5;
 }


 multiplyBy5.power = 2;
 /*
  Here, a property power is added to the multiplyBy5 function.
  Since functions in JavaScript are objects, you can add properties to them 
  just like any other object.
  */

//  console.log(multiplyBy5(5));

 //This accesses the power property of the multiplyBy5 function
//  console.log(multiplyBy5.power);

 /*
 In JavaScript, every function has a prototype property, which is an object. 
 This prototype object is used when the function is used as a constructor with the new keyword
 to create instances. Initially, it is an empty object {}.
  */
//  console.log(multiplyBy5.prototype);




function createUser(username, score){
    this.username = username;
    this.score = score;
}

/*
  Since, function is also object , we can add properties and methods just like an object.

  (function_name.prototype) ---> actually this is an object.
*/
createUser.prototype.increment = function(){
    this.score++;
    }

createUser.prototype.printMe = function(){
    console.log(this.score);
}

/*
we don't need to write createUser.prototype.increment() to access method of this object.
 Instead of we use  createUser.increment()

 without calling with `new` keyword , there is no link up with this methods (increment , printMe)
 */
 

const chai = new createUser('chai', 20);
const tea = new createUser('tea', 100);

chai.increment();
chai.printMe();



/*
****Important for interview*****

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/