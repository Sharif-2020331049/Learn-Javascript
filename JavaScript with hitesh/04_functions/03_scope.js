{
    let a = 10;
    var b = 30;
    const c = 40;
}

// console.log(a);  -> error
// console.log(b);
// console.log(c);  -> error

/* Whenever we declare a variable by var keyword at any place. It don't care 
   about scope . It works like global variable .   */

/* But for let and const keyword always maintain scope. We can user them 
   only in scope where these variable declare by let or const keyword */



// +++++++++++ Interestion ++++++++++ //
// console.log(addOne(6));  --> don't show error
function addOne(x)
{
    return x+1;
}
// console.log(5);
/* But uper this case we can call function after declalraton also befor declartion   */

// console.log(addTwo(6));   --> show error
const addTwo = function(x){
    return x+2;
}

// console.log(addTwo(10)); 
/* It's works perfectly only when we call function after declaration . but Before
   declaration we can't call it . */



