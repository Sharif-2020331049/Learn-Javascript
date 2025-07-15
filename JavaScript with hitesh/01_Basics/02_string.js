const customerName = 'Sharif';
const gameName = new String('Killeri');
// console.log(gameName[6]);
// console.log(gameName.length);
// console.log(gameName.__proto__);

// console.log(gameName.toUpperCase());

// in a index which character lies
// console.log(gameName.charAt(4));


// first appearence of i 
// console.log(gameName.indexOf('i'));

/*
last appearence of i and if 'i' doesn't contains in this string, then 
simply return -1;
*/
// console.log(gameName.lastIndexOf('i'));
const fbName = new String('sahidur rahman sharif');


// console.log(gameName.valueOf());
// console.log(gameName.valueOf());

// first and last space remove
// console.log(gameName.trim());

/*
 substring - > in substring we use only +ve index. 
 if we use -ve value it always start at 0. 
 */

// console.log(gameName.substring(0,4));

/*
 slice -> in slice works same as substring but we use 
 -ve value 
 */
// console.log(gameName.slice(-6,3));

// const str = "The morning is upon us.";
// console.log(str.length);
// console.log(str.slice(-4, -1));
const url = "https//: sharif49@gmail.com%20cse%20Sust";


// // just replace first occurence
// console.log(url.replace('%20', '-'));


// // If I want to replace all occurence 
// console.log(url.replace(/%20/g, '-'))

// console.log(url.includes('Sust'));





// console.log('abc' > 'ABC');
// console.log('Abcb' > 'Abcd');
const check =new String(true);
console.log(check.valueOf());


