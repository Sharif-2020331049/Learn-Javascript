let myDate = new Date();

// console.log(myDate.toString());

// console.log(myDate.toDateString());

// console.log(myDate.toLocaleDateString());

// console.log(myDate.toISOString());

// console.log(myDate.toJSON());

//**** */ my created date ******//

// Date input//
let myCreatedDate = new Date(2024, 3, 26, 5, 12);
console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());


// let myCreatedDateTwo = new Date("2024-01-23");
// also we can put ('MM/DD/YYYY') //
// console.log(myCreatedDateTwo.toLocaleString());



// ******+++++++ Time +++++*******  //
let myTimeStump = Date.now();
// console.log(myTimeStump);

// console.log(myCreatedDate.getTime());

// If we convert it into seconds or years or months or hours //

console.log(Math.floor(myTimeStump/(1000*60*60*24*365)));


let newDate = new Date();
// console.log(newDate.getMonth());
// console.log(newDate.getDay());
