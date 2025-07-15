//singleton
// Object.create


// symbol 
const mySym = Symbol("myKey1")

 /*************** Object Literal: ************/
const JsUser = {

    name: "Sharif",
    fullName: "Sahidur Rahman",
    age : 22,
    // use as a Symbol
    [mySym] : "myKey2",
    email : "sharif433742@gmail.com",
    location : "Feni, Bangladesh", 
    isLogedIn : false, 
    lastLoginDays : ["Friday", "Saturday", "Sunday"]

}

/*******  access Object element  ******/

// console.log(JsUser.email);
// console.log( typeof JsUser.age);

//******** another way to access:  -> Object_Name["Property name"]; ***********//

// console.log(JsUser["fullName"]);
// console.log(JsUser['age']);

/*** also symbol only access ***/
// console.log( JsUser[mySym]);


 /******* change object property **********/

//  JsUser.email = "Sharif125272@gmail.com";

//  console.log(JsUser["email"]);

 /********** Freez object Element: Can't change it's property   ************/
//  Object.freeze(JsUser);  
// JsUser["email"] = "sahidur49@student.sust.edu"; //-> not show error but value don't update 
// console.log(JsUser["email"]);

console.log(JsUser);

JsUser.greeting = function()
{
    console.log("Hello Js user");
}
JsUser.greetingTwo = function()
{
    console.log(`Hello JS user, ${this.name}`);
}
JsUser.greeting();
JsUser.greetingTwo();



