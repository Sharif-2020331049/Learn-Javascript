// Array 


// Array Declaration //
const myArr = [1, 3, 5, 6, 7];

const myHeroies = ["shaktiman", "marvel", "spiderman"];

const myArr2 = new Array(1,4,6,2,8);

// element access//

// console.log(myArr2[2]);
// console.log(myHeroies[2]);

// push -> add element at last. pop-> pop last element 
// myArr.push(8);
// console.log(myArr);
// myArr.pop();
// console.log(myArr);

/*  shift & unshift methods 
in unshift add element at first position and rest of 
 element shift one position right . It is costly operation. */

// myArr.unshift(0);
// console.log(myArr);

// erase first element shift() method 
// console.log(myArr);
//  myArr.shift();
//  console.log(myArr);


/* slice() & splice() method */

console.log("A", myArr); // labeling 

const myNewArray1 = myArr.slice(1, 4);
console.log(myNewArray1);
console.log("B", myArr);

/* For slice (start point , next of end point-> not include end point element) 
  But for splice  (start point, also include last point element)
  Another case for splice orginal array also changed by new spliced array . */
const myNewArray2 = myArr.splice(1,4);
// console.log(myNewArray2);
// console.log("C", myNewArray2);


