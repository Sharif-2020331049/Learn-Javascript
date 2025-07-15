const codding = ['JS', 'C++', 'Java', 'Python'];

// codding.forEach( (item)=>{
//     console.log(item);
// })


/* Problem is forEach loop returns nothing .  */
// const values = codding.forEach( (item)=>{
//     return item;
// });
// console.log(values);



/* For return also from array or loop  */
const myNums = [1,2,3,4,5,6,7,8,9,10];

/* It returns only those value when condition is true after return statement make an array.
  In this case array is modifiedArray.  */

// const modifiedArray = myNums.filter( (num)=>
// {
//     return num > 4;
// });


// const modifiedArray = myNums.filter( (num)=>num < 6 )
// console.log(modifiedArray);

/* We can doing this by forEach loop by manually. */
// const newArray = [];
// myNums.forEach( (val)=>{
//    if(val > 5)  newArray.push(val);
// });

// console.log(newArray);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
let userBook = books.filter( (item)=> item.genre === 'History');
// console.log(userBook);

userBook = books.filter( (bk)=> bk.edition > 2000 && bk.genre === 'History')
console.log(userBook);