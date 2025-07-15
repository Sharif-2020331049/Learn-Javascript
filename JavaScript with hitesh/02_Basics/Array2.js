const marvel_Heroies = ["Spiderman", "Thor", "Ironman"];
const marvel_Heroies1 = ["Spiderman", "Thor", "Ironman"];

const dc_Heroies = ["Superman", "Flash", "Batman"];

/*  array push another array as an element -> actually it takes the array as an element
 Because we can insert any type of data  */

// marvel_Heroies.push(dc_Heroies);

// console.log(marvel_Heroies); // array type element .

/*  If I concate two array it returns a new array.   */
const all_Heroies = marvel_Heroies.concat(dc_Heroies)

// console.log(all_Heroies);


/*  But in this case always use sparse-> sob alada hoye jay  
    In concate we can add only two array but in spase we can add multiple array  */

// console.log(...marvel_Heroies, ...dc_Heroies);

const another_array = [1,2, 3,[4, 2 ,1], 1, 6, [8, 3, 1, [9, 1, 5, [0, 7, 3]]] ];
/* return new array. in parenthesis we can pass depth in which we want to flatten . 
   we can pass infinity */

// const another_array2 =  another_array.flat(2);
// const another_array2 =  another_array.flat(Infinity);
// console.log(another_array2);

/* is this array type or not? */
// console.log(Array.isArray("Sharif"));

/* we can also conver in array  type. */
//console.log(Array.from("Sharif"));

//console.log(Array.from({name: "Sharif"}));
 /* If we not define either key convert array or value. 
  It will return a empty array .  -> Interesting Case */ 


  let score1 = 100;
  let score2 = 200;
  let score3 = 300;
  /* construct an array from set of element  .  */
//   console.log(Array.of(score1, score2, score3));










