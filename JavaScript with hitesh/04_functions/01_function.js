function AddTwoNumber(number1, number2)
{
    return number1 + number2;
}

// console.log(AddTwoNumber(23, 4));

/* when two datatype are not same  */

// console.log(AddTwoNumber('12', 12));
// console.log(AddTwoNumber(124, null));
// console.log(AddTwoNumber(214));

function loginInfo(anyObject)
{
     console.log(anyObject.username);
     console.log(anyObject.id);
     console.log(anyObject.location);
}



// const obj1 = {
//     username : "sharif", 
//     id : '49',
//     location : 'Feni'
// }
// loginInfo(obj1);

// loginInfo(
//     {
//         username : "suhad", 
//         id : '90',
//         location : 'Noakhali'
//     }
// )


/* If we don't now how many argument will pass-> rest */
// function cardItemPrice(...price)
// {
//     console.log(price);

// }

// cardItemPrice(133,342, 434, 100, 5454);


/* If We pass array in function */

// function arrayElement(getArray)
// {
//   for(let i =0; i<getArray.length; ++i)
//     {
//         console.log(getArray[i]);
//     }  
// }
// const arr1 = [1, 2, 3, 4, 5];
// arrayElement(arr1)




