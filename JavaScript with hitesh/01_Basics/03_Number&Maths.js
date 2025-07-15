const numberOne = 123243;
// console.log(numberOne);

// console.log(numberOne.toString().length);

const numberTwo = 124.49324;
// // how many digits I want to keep after decimal
// console.log(numberTwo.toFixed(2));

// toPrecision -> round off value 

// console.log(numberTwo.toPrecision(5));

const numberThree = 10000000000;
// console.log(numberThree.toPrecision(1));

// easily readable a  number 
const hundreds = 100000000;

// by default us standard  for bangladeshi style 
// console.log(hundreds.toLocaleString('bn-BD'));


// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);

// +++++++++++++ Math ++++++++++++++++++++

// console.log(Math.abs(-3));
// console.log(Math.round(4.65));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.8));


// console.log(Math.max(2,4,8,4));
// console.log(Math.min(9,7 ,5, -1));


// to generate random value range 0 to 1
// console.log(Math.random());

// console.log((Math.random()*10) + 1);


// If we want range a(min) to b(max)

const min = 10;
const max = 20;
// formula to generate random number
// console.log(Math.floor(Math.random()*(max-min+1)) + min);

