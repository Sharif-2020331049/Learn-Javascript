const user = {
    userName: "Sharif", 
    id: '049', 
    welcomeMessage: function() {
        console.log(`${this.userName}, Enter Website . Welcome !`);
        // console.log(this);
    }
}

user.welcomeMessage();
user.userName = "Sakib";
user.welcomeMessage();

// console.log(this);  // --> empty object cause node has empty object contex


// function chai()
// {
//     console.log(this);
// }

// chai();

// const Chai = function()
// {
//    console.log(this);

// }
// Chai();




// Arrow function in javaScript -> Just like lamba function in java 
// const chai = ()=>{  console.log("hi"); }
// chai();

/* Curlie brasis or 2nd bracket dile return keyword likhte hobe.  */
// const sumNumber = (a, b)=> {return a+b}
// console.log(sumNumber(2, 5));




/* Kono bracker na thakle or parenthesis thakle return keyword likha lage na */
// const addTwo = (a, b)=> a+b;
// console.log(addTwo(4, 6));

// const addTwo = (a, b)=> (a+b);
// console.log(addTwo(2,6 ));

// but object return korte chaile without return keyword tahole must parenthesis dite hobe
// const addTwo = (a,b)=>({userName: "sharif"});
// console.log(addTwo(6,43));




// const regularFunction = function() {
//     console.log(this);
// };

// const arrowFunction = () => {
//     console.log(this);
// };

// regularFunction(); // `this` depends on the call context (e.g., global object in non-strict mode)
// arrowFunction(); // `this` is lexically bound (e.g., to the surrounding context)


// const arrowFunction = () => {
//     console.log(this);
// };
// arrowFunction(); // Logs the global object if defined in the global scope.
