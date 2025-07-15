// function chai()
// {
//     console.log("DB connected");
// }
// chai();

// const a = function sum(a, b){
//      return a+b
// }
/* IIFE (Immediately Invoked Function Expression )
 When we need to connect database in execution time and protect 
 from global scope variable then we use this */

//  const chai = () =>{
//     console.log("hi");
    
//  }
//  chai();


/* Immediately Invoked Function Expression -> Immediately call when application start, 
      prevent from global scpoe to pollute .  */

// (function chai()
// {
//     /* Named IFFE */ 
//    console.log("DB Connected");
// })();


(()=>{
   console.log("DB Connected with Arrow");
})();
/* This case js don't know where stop that's why we have to use semi-colon afer
 second parenthesis.  */ 

 ((name)=>{
   console.log((`DB Connected Two, ${name}`));
 })("Sharif");
